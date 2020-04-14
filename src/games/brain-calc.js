import getRandomNum from '../utils/index.js';
import engine from '../index.js';

const getAnswer = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '-':
      return firstNum - secondNum;
    case '+':
      return firstNum + secondNum;
    default:
      return firstNum * secondNum;
  }
};

const operatorSymbols = ['-', '+', '*'];
const description = 'What is the result of the expression?';

const brainCalc = () => {
  const firstNum = getRandomNum(1, 30);
  const secondNum = getRandomNum(1, 30);
  const randomOperator = operatorSymbols[Math.floor(Math.random() * operatorSymbols.length)];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const answer = getAnswer(firstNum, secondNum, randomOperator);
  return [question, answer];
};

export default () => engine(description, brainCalc);
