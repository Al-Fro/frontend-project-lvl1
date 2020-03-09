import readlineSync from 'readline-sync';

const hello = () => {
    const greetings = readlineSync.question('May I have you Name?');
    return "Hello, " + greetings; 
};
export default hello;



