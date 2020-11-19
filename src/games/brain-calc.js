import startGame from '../index.js';
import getRandomNum from '../random.js';

const description = 'What is the result of the expression?';

const min = 1;
const max = 50;

const calcMathOperations = ['+', '-', '*'];

const calcMathExpression = (a, b, operation) => {
  switch (operation) {
    case '+':
      return String(a + b);

    case '-':
      return String(a - b);

    case '*':
      return String(a * b);

    default:
      throw new Error('This operation cannot be performed!');
  }
};

const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(min, max);
  const secondNum = getRandomNum(min, max);
  const mathOperation = calcMathOperations[getRandomNum(0, calcMathOperations.length - 1)];

  const question = `${firstNum} ${mathOperation} ${secondNum}`;
  const answer = calcMathExpression(firstNum, secondNum, mathOperation);
  return [question, answer];
};

export default () => startGame(description, getQuestionAndAnswer);
