import getRandomNum from '../utils/index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const brainPrime = () => {
  const question = getRandomNum(-100, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};
