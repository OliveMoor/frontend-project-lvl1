import startGame, { getRandomNum } from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  if (num === 2) {
    return true;
  }

  const iter = (acc) => {
    if (acc > num / 2) {
      return true;
    }
    if (num % acc === 0) {
      return false;
    }
    return iter(acc + 1);
  };

  return iter(2);
};

const generateData = () => {
  const question = getRandomNum(2, 300);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startBrainPrime = () => {
  startGame(description, generateData);
};

export default startBrainPrime;
