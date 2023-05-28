import { TriviaQuestion } from '../../../packages/types/api';
export const createSessionQuestions = async (): Promise<TriviaQuestion[]> => {
  await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    .then(res => {
      if (!res.ok) {
        throw new Error('Could not fetch questions');
      }
      return res.json();
    })
    .then(data => {
      return data.results;
    });
  return [];
};
