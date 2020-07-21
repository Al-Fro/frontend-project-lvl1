import getRandomNum from '../utils/index.js';
import runEngine from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= number / 2; divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameData = () => {
  const question = getRandomNum(-100, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [String(question), answer];
};

export default () => runEngine(description, getGameData);
