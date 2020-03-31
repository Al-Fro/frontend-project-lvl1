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
  else if (nameGames === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  }
  else if (nameGames === 'brain-progression') {
    console.log('What number is missing in the progression?');
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

    else if (nameGames === 'brain-gcd') {
      const firstNum = getRandomNum(1,100);
      const secondNum = getRandomNum(1,100);
      task = Number(readlineSync.question(`Question: ${firstNum} ${secondNum} \nYour answer:`)); 
      for (let i = 1; i < firstNum + secondNum; i += 1) {
        if (firstNum % i === 0 && secondNum % i === 0) {
          answer = i;
        }
      }
    }
    
    else if (nameGames === 'brain-progression') {
      let firstNum = getRandomNum(1,100);
      const step = getRandomNum(1,10);
      let array = [];
      for (let i = 0; i != 10; i += 1) {
        array.push(firstNum);
        firstNum += step;
      }
      let num = getRandomNum(1,9);
      array[num] = '..';
      answer = array[num - 1] + step;
      const str = array.join(' ');
      task = Number(readlineSync.question(`Question: ${str} \nYour answer:`));
    }

    if (task === answer) {
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


