export type Question = {
  id: number;
  sessionId: number;
  session?: Session;
  playersAnswers: PlayerChoice[];
} & TriviaQuestion;
export type TriviaQuestion = {
  question: string;
  category?: string;
  type?: string;
  difficulty?: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type PlayerChoice = {
  id: number;
  playerId: number;
  questionId: number;
  choice: number;
  player?: Player;
  question?: Question;
};
export type Session = {
  id: number;
  gameId: number;
  game?: Game;
  currQuestion: number;
  questions: Question[];
};

export type Player = {
  id: number;
  username: string | String;
  color: string | String;
  gameId: number;
  game?: Game;
  score: number;
  answers: PlayerChoice[];
};

export type Game = {
  id: number;
  url: string | String;
  currSession: number;
  sessions: Session[];
  players: Player[];
};
