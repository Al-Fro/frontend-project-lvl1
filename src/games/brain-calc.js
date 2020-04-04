import { getRandomNum } from '../utils/index.js';

const getAnswer = (firstNum, secondNum, operator) => {
    switch(operator) {
        case '-':
        return firstNum - secondNum;
        case '+':
        return firstNum + secondNum;
        case '*': 
        return firstNum * secondNum;
    }
}

export default () => {
    const description = 'What is the result of the expression?';
    const operatorSymbols = ['-', '+', '*'];
    const firstNum = getRandomNum(1,30);
    const secondNum = getRandomNum(1,30);
    const randomOperator = operatorSymbols[Math.floor(Math.random() * operatorSymbols.length)];
    const question = `${firstNum} ${randomOperator} ${secondNum}`;
    const answer = getAnswer(firstNum, secondNum, randomOperator);
   
    return [description, question, answer];
}