import { TriviaQuestion } from '../../../packages/types/api';
import prisma from '../prisma';
import { createSessionQuestions } from '../utils/createSessionQuestions';

const sessionController = {
  createSession: async (req: any, res: any) => {
    const { gameId } = req.params;
    try {
      // todo try to use a try catch block outside to check for errors in question fetching
      const questions: TriviaQuestion[] = await createSessionQuestions();
      console.log(questions);
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
        .json({ message: 'New session createed successfully!', session });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error:
          'Could not create a new session. Please contact the administrator if the problem persists'
      });
    }
  }
};

export default sessionController;
