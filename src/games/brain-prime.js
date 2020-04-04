import { getRandomNum } from '../utils/index.js';

const getPrime = (question) => {
  for (let i = 2; i < question; i += 1) {
    if (question % i === 0) {
      return 'no'
    } 
  }
  return 'yes';
}

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = getRandomNum(2,100);
  const answer = getPrime(question);
    
  return [description, question, answer];
}