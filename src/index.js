import readlineSync from 'readline-sync';

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
    const [description, question, answer] = game();
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


