import getRandomNum from '../utils/index.js';
import engine from '../index.js';

const getGcd = (firstNum, secondNum) => {
  let temp1 = firstNum;
  let temp2 = secondNum;
  while (temp2 !== 0) {
    temp2 = temp1 % (temp1 = temp2);
  }
  return temp1;
};

const description = 'Find the greatest common divisor of given numbers.';

const brainGcd = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const answer = getGcd(firstNum, secondNum);
  return [question, answer];
};

export default () => engine(description, brainGcd);
