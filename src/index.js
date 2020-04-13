import readlineSync from 'readline-sync';

export default (description, game) => {
  console.log('Welcome to the Brain Games!');
  const greetings = readlineSync.question('May I have you Name?');
  console.log(`Hello, ${greetings}!`);

  if (game === 'brain-games') {
    return;
  }

  console.log(description);

  for (let counter = 0; counter < 3; counter += 1) {
    const [question, answer] = game();
    const task = readlineSync.question(`Question: ${question} \nYour answer:`);

    if ((typeof (task) !== 'undefined' && Number(task) === answer) || (task === answer)) {
      console.log('Correct!');
    } else {
      console.log(`${task} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${greetings}!`);
      return;
    }
  }
  console.log(`Congratulations, ${greetings}!`);
};
