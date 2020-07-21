import getRandomNum from '../utils/index.js';
import runEngine from '../index.js';

const getProgression = (firstNum, step, lenght) => {
  const progression = [];

  for (let i = 0; i !== lenght; i += 1) {
    progression.push(firstNum + step * i);
  }

  return progression;
};

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const firstNumProgression = getRandomNum(1, 100);
  const lenghtProgression = 10;
  const step = getRandomNum(1, lenghtProgression);

  const progression = getProgression(firstNumProgression, step, lenghtProgression);

  const missingNum = getRandomNum(1, lenghtProgression - 1);
  progression[missingNum] = '..';

  const question = progression.join(' ');
  const answer = progression[missingNum - 1] + step;
  return [question, String(answer)];
};

export default () => runEngine(description, getGameData);
