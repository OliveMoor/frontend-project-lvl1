import startGame, { getRandomNum } from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateData = () => {
  const firstNum = getRandomNum(0, 300);
  const secondNum = getRandomNum(0, 300);

  const question = `${firstNum} ${secondNum}`;
  const answer = String(gcd(firstNum, secondNum));

  return [question, answer];
};

const startBrainGcd = () => startGame(description, generateData);

export default startBrainGcd;
