import readlineSync from 'readline-sync';
import makeGreetings from './games/brain-games.js';

const countsOfRounds = 3;

export default (description, game) => {
  const greetings = makeGreetings();
  console.log(description);

  for (let counter = 0; counter < countsOfRounds; counter += 1) {
    const [question, answer] = game();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer:`);

    if ((typeof (userAnswer) !== 'undefined' && Number(userAnswer) === answer) || (userAnswer === answer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${greetings}!`);
      return;
    }
  }
  console.log(`Congratulations, ${greetings}!`);
};
