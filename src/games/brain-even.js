import getRandomNum from '../utils/index.js';
import runEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (question) => (question % 2 === 0);

const getBrainEven = () => {
  const question = getRandomNum(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => runEngine(description, getBrainEven);
