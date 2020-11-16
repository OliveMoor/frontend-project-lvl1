import startGame from '../index.js';
import getRandomNum from '../random.js';

const description = 'Find the greatest common divisor of given numbers.';

const min = 1;
const max = 300;

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(min, max);
  const secondNum = getRandomNum(min, max);

  const question = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));

  return [question, answer];
};

const startBrainGcd = () => startGame(description, getQuestionAndAnswer);

export default startBrainGcd;
