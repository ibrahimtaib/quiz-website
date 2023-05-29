export type Question = {
  id: number;
  sessionId: number;
  session?: Session;
  playersAnswers?: PlayerChoice[];
} & TriviaQuestion;
export type TriviaQuestion = {
  question: string;
  category: string;
  type: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: string[];
};
export type PlayerChoice = {
  id: number;
  playerId: number;
  questionId: number;
  answer: string;
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
export enum Difficulty {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}
export enum Type {
  multiple = 'multiple',
  boolean = 'boolean'
}
export enum Category {
  generalKnowledge = 9,
  books = 10,
  film = 11,
  music = 12,
  musicalsAndTheatres = 13,
  television = 14,
  videoGames = 15,
  boardGames = 16,
  scienceAndNature = 17,
  computers = 18,
  mathematics = 19,
  mythology = 20,
  sports = 21,
  geography = 22,
  history = 23,
  politics = 24,
  art = 25,
  celebrities = 26,
  animals = 27,
  vehicles = 28,
  comics = 29,
  gadgets = 30,
  animeAndManga = 31,
  cartoons = 32
}

export type NewSession = {
  category: Category;
  type: Type;
  difficulty: Difficulty;
  amount?: number;
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
export enum GameStatus {
  LOBBY = 'lobby',
  INGAME = 'ingame',
  SCORES = 'scores',
  FINISHED = 'finished'
}
export type Game = {
  id: number;
  status: GameStatus;
  url: string | String;
  currSession: number;
  sessions: Session[];
  players: Player[];
};
