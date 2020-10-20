import startGame, { getRandomNum } from '../src/index.js';

const description = 'What number is missing in the progression?';

const getElement = () => {
  const length = 10;
  const firstElement = getRandomNum(1, 5);
  const step = getRandomNum(2, 10);
  const elementIndex = getRandomNum(0, length - 1);
  const progression = [];

  for (let i = 0; i < length; i += 1) {
    progression.push(firstElement + step * i);
  }

  const element = progression[elementIndex];
  progression[elementIndex] = '..';

  return [progression.join(' '), String(element)];
};

const generateData = () => {
  const [question, answer] = getElement();

  return [question, answer];
};

const startBrainProgression = () => {
  startGame(description, generateData);
};

export default startBrainProgression;
