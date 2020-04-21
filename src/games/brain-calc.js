import getRandomNum from '../utils/index.js';
import runEngine from '../index.js';

const getAnswer = (firstNum, secondNum, operator) => {
  switch (operator) {
    case '-':
      return firstNum - secondNum;
    case '+':
      return firstNum + secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      throw new Error(`Unknown operator: "${operator}" `);
  }
};

const operators = ['-', '+', '*'];
const description = 'What is the result of the expression?';

const getBrainCalc = () => {
  const firstNum = getRandomNum(1, 30);
  const secondNum = getRandomNum(1, 30);
  const randomOperator = operators[getRandomNum(0, operators.length - 1)];
  const question = `${firstNum} ${randomOperator} ${secondNum}`;
  const answer = getAnswer(firstNum, secondNum, randomOperator);
  return [question, answer];
};

export default () => runEngine(description, getBrainCalc);
