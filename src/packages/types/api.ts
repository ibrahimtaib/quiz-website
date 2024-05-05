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
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}
export enum Type {
  MULTIPLE = 'multiple',
  BOOLEAN = 'boolean'
}
/* write the category enum but this time all fields in uppercase */
export enum CATEGORY {
  GENERAL_KNOWLEDGE = 9,
  BOOKS = 10,
  FILM = 11,
  MUSIC = 12,
  MUSICALS_AND_THEATRES = 13,
  TELEVISION = 14,
  VIDEO_GAMES = 15,
  BOARD_GAMES = 16,
  SCIENCE_AND_NATURE = 17,
  COMPUTERS = 18,
  MATHEMATICS = 19,
  MYTHOLOGY = 20,
  SPORTS = 21,
  GEOGRAPHY = 22,
  HISTORY = 23,
  POLITICS = 24,
  ART = 25,
  CELEBRITIES = 26,
  ANIMALS = 27,
  VEHICLES = 28,
  COMICS = 29,
  GADGETS = 30,
  ANIME_AND_MANGA = 31,
  CARTOONS = 32
}

export type NewSession = {
  category: CATEGORY;
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
