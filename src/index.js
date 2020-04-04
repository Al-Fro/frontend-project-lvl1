import readlineSync from 'readline-sync';
import brainCalc from './games/brain-calc.js';
import brainEven from './games/brain-even.js';
import brainGcd from './games/brain-gcd.js';
import brainPrime from './games/brain-prime.js';
import brainProgression from './games/brain-progression.js';

const getGame = (name) => {
  switch(name) {
    case 'brain-calc':
    return brainCalc();
    case 'brain-even':
    return brainEven();
    case 'brain-gcd':
    return brainGcd();
    case 'brain-prime':
    return brainPrime();
    case 'brain-progression':
    return brainProgression();
  }
}

export const engine = (game) => {

  console.log('Welcome to the Brain Games!');
  const greetings = readlineSync.question('May I have you Name?');
  
  if (game === 'brain-games') {
    return `Hello, ${greetings}!`;
  }
  else { console.log(`Hello, ${greetings}!`) }

  let counter = 0;
  let quit = 0;
  while (counter !== 3) {
    const [description, question, answer] = getGame(game);
    if (counter === 0 && quit === 0) {
      console.log(description);
    } 
    const task = readlineSync.question(`Question: ${question} \nYour answer:`);

    if ((typeof(task) !== undefined && Number(task) === answer) || (task === answer)) {
      console.log('Correct!');
      counter += 1;
      quit = 0;
    }
    else {
      console.log(`${task} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${greetings}!`);
      counter = 0;
      quit += 1;
      if (quit === 3) {
        return '';
      } 
    }
  }
  return `Congratulations, ${greetings}!`;
}


