import getRandomNum from '../utils/index.js';
import runEngine from '../index.js';

const getGcd = (firstNum, secondNum) => {
  let a = firstNum;
  let b = secondNum;
  while (b !== 0) {
    b = a % (a = b);
  }
  return a;
};

const description = 'Find the greatest common divisor of given numbers.';

const getBrainGcd = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = getGcd(firstNum, secondNum);
  return [question, answer];
};

export default () => runEngine(description, getBrainGcd);
