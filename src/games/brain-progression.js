import getRandomNum from '../utils/index.js';


export const description = 'What number is missing in the progression?';

export const brainProgression = () => {
  let firstNum = getRandomNum(1, 100);
  const step = getRandomNum(1, 10);
  const array = [];
  for (let i = 0; i !== 10; i += 1) {
    array.push(firstNum);
    firstNum += step;
  }
  const num = getRandomNum(1, 9);
  array[num] = '..';
  const question = array.join(' ');
  const answer = array[num - 1] + step;
  return [question, answer];
};
