import startGame from '../index.js';
import getRandomNum from '../random.js';

const description = "Answer 'yes' if the number is even, otherwise answer 'no'";

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = String(getRandomNum());
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startBrainEven = () => startGame(description, getQuestionAndAnswer);

export default startBrainEven;
