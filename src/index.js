import readlineSync from 'readline-sync';

export default () => {
  const greetings = readlineSync.question('May I have you Name?');
  return `Hello, ${greetings}`;
}; 
