import fetch from 'node-fetch';
import { NewSession, TriviaQuestion } from '../../../packages/types/api';
export const createSessionQuestions = async (
  newSession: NewSession
): Promise<TriviaQuestion[]> => {
  const amount = newSession?.amount ? newSession.amount : 10;
  return await fetch(
    `https://opentdb.com/api.php?amount=${amount}&category=${newSession.category}&difficulty=${newSession.difficulty}&type=${newSession.type}`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error('Could not fetch questions');
      }
      return res.json();
    })
    .then((data: any) => {
      if (data.response_code !== 0) {
        console.error(data);
        throw new Error('Could not fetch questions');
      }
      return data.results;
    });
};
