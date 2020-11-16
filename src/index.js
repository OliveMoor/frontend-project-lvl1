import promptly from 'promptly';

const startGame = async (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${description}`);

  let hadWrongAnswer;
  let attemptsLeft = 3;

  while (attemptsLeft !== 0 && !hadWrongAnswer) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer: ');

    hadWrongAnswer = userAnswer !== correctAnswer;

    if (hadWrongAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    } else {
      console.log('Correct!');
    }

    attemptsLeft -= 1;
  }

  if (!hadWrongAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;
