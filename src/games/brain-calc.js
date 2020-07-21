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

const getGameData = () => {
  const firstNum = getRandomNum(1, 30);
  const secondNum = getRandomNum(1, 30);

  const operator = operators[getRandomNum(0, operators.length - 1)];

  const question = `${firstNum} ${operator} ${secondNum}`;
  const answer = getAnswer(firstNum, secondNum, operator);
  return [question, String(answer)];
};

export default () => runEngine(description, getGameData);
