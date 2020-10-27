import startGame, { getRandomNum } from '../index.js';

const description = 'What is the result of the expression?';

const calcMathOperations = ['+', '-', '*'];

const getCalcOperation = (a, b, operation) => {
  switch (operation) {
    case '+':
      return String(a + b);

    case '-':
      return String(a - b);

    default:
      return String(a * b);
  }
};

const generateData = () => {
  const firstNum = getRandomNum(0, 50);
  const secondNum = getRandomNum(0, 50);
  const mathOperation = calcMathOperations[getRandomNum(0, 2)];

  const question = `${firstNum} ${mathOperation} ${secondNum}`;
  const answer = getCalcOperation(firstNum, secondNum, mathOperation);
  return [question, answer];
};

const startBrainCalc = () => startGame(description, generateData);

export default startBrainCalc;
