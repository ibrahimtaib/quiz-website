import {
  NewSession,
  PlayerChoice,
  Question,
  TriviaQuestion
} from '../../../packages/types/api';
import prisma from '../prisma';
import { createSessionQuestions } from '../utils/createSessionQuestions';

const sessionController = {
  createSession: async (req: any, res: any) => {
    const { gameId } = req.params;
    const { newSession }: { newSession: NewSession } = req.body;

    if (!gameId || !newSession) {
      res.status(400).json({ message: 'Bad arguments' });
      return;
    }
    try {
      // todo try to use a try catch block outside to check for errors in question fetching
      const questions: TriviaQuestion[] = await createSessionQuestions(
        newSession
      );
      const session = await prisma.session.create({
        data: {
          questions: {
            createMany: {
              data: questions
            }
          },
          game: {
            connect: {
              id: +gameId
            }
          }
        },
        include: {
          questions: true
        }
      });

      res
        .status(200)
        .json({ message: 'New session created successfully!', session });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          'Could not create a new session. Please contact the administrator if the problem persists'
      });
    }
  },
  answerCurrentQuestion: async (req: any, res: any) => {
    const { gameId, sessionId } = req.params;
    const { playerId, answer } = req.body;

    if (!gameId || !sessionId || !playerId || !answer) {
      res.status(400).json({ message: 'Bad arguments' });
      return;
    }
    try {
      await prisma.$transaction(async prisma => {
        const game = await prisma.game.findUnique({
          where: {
            id: +gameId
          }
        });
        if (!game) {
          throw Error('Game is supposed to exist (middleware)');
        }
        //todo is this really necessary?
        if (game?.currSession !== +sessionId) {
          res.status(403).json({
            error: 'Session has already passed'
          });
          return;
        }
        const session = await prisma.session.findUnique({
          where: {
            id: +sessionId
          },
          include: {
            questions: true
          }
        });
        if (!session) {
          res.status(404).json({
            error: 'Session not found'
          });
          return;
        }

        /* Check validity of currQuestion */
        if (session.currQuestion >= session.questions.length) {
          res.status(400).json({
            error: 'No more questions to answer'
          });
          return;
        }
        const currentQuestion: Question =
          session.questions[session.currQuestion];

        /* Check if the answer is valid */
        const isCorrect = currentQuestion.correct_answer === answer;
        if (!isCorrect && !currentQuestion.incorrect_answers.includes(answer)) {
          res.status(400).json({
            error: 'Answer is not valid'
          });
          return;
        }
        //Check if playerId can be turned into a number
        if (isNaN(parseInt(playerId))) {
          res.status(400).json({
            error: 'PlayerId is not valid'
          });
          return;
        }
        const player = await prisma.player.findUnique({
          where: {
            id: +playerId
          }
        });

        if (!player) {
          res.status(404).json({
            error: 'Player not found'
          });
          return;
        }

        /* Check if player has already answered the question */
        let playerChoice: PlayerChoice | null =
          await prisma.playerChoice.findUnique({
            where: {
              playerId_questionId: {
                playerId: +playerId,
                questionId: currentQuestion.id
              }
            }
          });
        let offset = 0;
        if (playerChoice === null) {
          playerChoice = await prisma.playerChoice.create({
            data: {
              player: {
                connect: {
                  id: +playerId
                }
              },
              question: {
                connect: {
                  id: currentQuestion.id
                }
              },
              answer
            }
          });
          offset = isCorrect ? 1 : 0;
        } else {
          const wasCorrect =
            playerChoice.answer === currentQuestion.correct_answer;
          playerChoice = await prisma.playerChoice.update({
            where: {
              playerId_questionId: {
                playerId: +playerId,
                questionId: currentQuestion.id
              }
            },
            data: {
              answer
            }
          });
          offset = wasCorrect && !isCorrect ? -1 : 0;
        }
        await prisma.player.update({
          where: {
            id: +playerId
          },
          data: {
            score: player.score + offset
          }
        });

        res.status(200).json({
          message: 'Question answered successfully',
          playerChoice
        });
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          'Could not answer the question. Please contact the administrator if the problem persists'
      });
    }
  }
};

export default sessionController;
