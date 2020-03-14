import readlineSync from 'readline-sync';
let greetings = 0;
export const hello = ()=> {
  console.log('Welcome to the Brain Games!');
  greetings = readlineSync.question('May I have you Name?');
  return `Hello, ${greetings}!`;
}; 

export const checkEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min; 
  }
  let counter = 0;
  while (counter !== 3) {
    const randomNumber = getRandomNum(1,100);
    const task = readlineSync.question(`Question: ${randomNumber} \nYour answer:`);
    if ((randomNumber % 2 === 0 && task === 'yes') || (randomNumber % 2 !== 0 && task === 'no')) {
      console.log('Correct!');
      counter += 1;
    }
    else if (randomNumber % 2 === 0 && task === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again, ${greetings}`);
      counter = 0;
    }
    else if (randomNumber % 2 !== 0 && task === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${greetings}`);
      counter = 0;
    }
    else {counter = 0}
  }
  return `Congratulations, ${greetings}!`;
}