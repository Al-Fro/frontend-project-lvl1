import { getRandomNum } from '../utils/index.js';

export default () => {
    const description = 'Answer "yes" if the number is even, otherwise answer "no"';
    const question = getRandomNum(1,100);
    const answer = question % 2 === 0 ? 'yes' : 'no';
    return [description, question, answer];
}


