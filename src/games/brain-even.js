import getRandomNum from '../utils/index.js';

export const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export const brainEven = () => {
  const question = getRandomNum(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
