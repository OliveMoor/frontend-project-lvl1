import startGame from '../index.js';
import getRandomNum from '../random.js';

const description = "Answer 'yes' if the number is even, otherwise answer 'no'";

const isEven = (num) => num % 2 === 0;

const generateData = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startBrainEven = () => startGame(description, generateData);

export default startBrainEven;
