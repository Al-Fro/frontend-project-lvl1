import readlineSync from 'readline-sync';
let greetings;

export const hello = ()=> {
  console.log('Welcome to the Brain Games!');
  greetings = readlineSync.question('May I have you Name?');
  return `Hello, ${greetings}!`;
}; 

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min); 
};

export const engine = (nameGames) => {
  let counter = 0;
  let quit = 0;
  let task = 0;
  let answer = 0;
  if (nameGames === 'brain-even') {
    console.log('Answer "yes" if the number is even, otherwise answer "no"');
  }
  else if (nameGames === 'brain-calc') {
    console.log('What is the result of the expression?');
  }
  while (counter !== 3) {
    if (nameGames === 'brain-even') {
      const randomNumber = getRandomNum(1,100);
      task = readlineSync.question(`Question: ${randomNumber} \nYour answer:`); 
      answer = randomNumber % 2 === 0 ? 'yes' : 'no';
    }
    else if (nameGames === 'brain-calc') {
      const arrSymbols = ['-', '+', '*'];
      const firstNum = getRandomNum(1,30);
      const secondNum = getRandomNum(1,30);
      const arrSymbolsRandom = arrSymbols[Math.floor(Math.random() * arrSymbols.length)];
      task = Number(readlineSync.question(`Question: ${firstNum} ${arrSymbolsRandom} ${secondNum} \nYour answer:`));
      if (arrSymbolsRandom === '-') {
        answer = firstNum - secondNum;
      }
      else if (arrSymbolsRandom === '+') {
        answer = firstNum + secondNum;
      }
      else {
        answer = firstNum * secondNum;
      }
    }
    if (task === answer) {
      console.log('Correct!');
      counter += 1;
      quit = 0;
    }
    else  {
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


