import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const greetings = readlineSync.question('May I have you Name?');
  console.log(`Hello, ${greetings}!`);
  return greetings;
};
