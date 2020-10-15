
import {getRandomNum} from '../src/index.js';
import startGame from '../src/index.js';

const description ='Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

 return gcd(b, a % b);
};

const generateData = () => {
  const firstNum = getRandomNum (0, 100);
  const secondNum = getRandomNum (0, 100);

const question = `${firstNum} ${secondNum}`;
const answer = String(gcd(firstNum, secondNum));

return [question, answer];
};

startGame(description, generateData);
