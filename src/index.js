import readlineSync from 'readline-sync';

const countsOfRounds = 3;

export default (description, game) => {
  console.log('Welcome to the Brain Games!');
  const greetings = readlineSync.question('May I have you Name?');
  console.log(`Hello, ${greetings}!`);
  console.log(description);

  for (let counter = 0; counter < countsOfRounds; counter += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer:');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${greetings}!`);
      return;
    }
  }
  console.log(`Congratulations, ${greetings}!`);
};
