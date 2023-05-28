export type Question = {
  id: number;
  question: string | String;
  answers: string[] | String[];
  correct: number;
  sessionId: number;
  session?: Session;
  playersAnswers: PlayerChoice[];
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
