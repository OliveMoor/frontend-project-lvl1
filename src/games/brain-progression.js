import startGame from '../index.js';
import getRandomNum from '../random.js';

const description = 'What number is missing in the progression?';

const min = 2;
const max = 50;

const getQuestionAndAnswer = () => {
  const length = 10;
  const firstElement = getRandomNum(1, length);
  const step = getRandomNum(min, max);
  const elementIndex = getRandomNum(0, length - 1);
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(firstElement + step * i);
  }

  const answer = String(arr[elementIndex]);
  arr[elementIndex] = '..';
  const question = arr.join(' ');

  return [question, answer];
};

const startBrainProgression = () => {
  startGame(description, getQuestionAndAnswer);
};

export default startBrainProgression;
