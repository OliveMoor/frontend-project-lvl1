import startGame from '../index.js';
import getRandomNum from '../random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const min = 2;
const max = 500;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomNum(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const startBrainPrime = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startBrainPrime;
