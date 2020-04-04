import { getRandomNum } from '../utils/index.js';

const getGcd = (firstNum, secondNum, temp) => {
  while (secondNum !== 0) {
    temp = secondNum;
    secondNum = firstNum % secondNum;
    firstNum = temp;
  }
  return firstNum;
}

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const firstNum = getRandomNum(1,100);
  const secondNum = getRandomNum(1,100);
  const question = `${firstNum} ${secondNum}`; 
  const answer = getGcd(firstNum, secondNum, 0);
  return [description, question, answer];
} 