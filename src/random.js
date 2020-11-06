const getRandomNum = (min = 0, max = 100) => {
  const value = Math.floor(Math.random() * (max - min) + 1) + min;
  return value;
};

export default getRandomNum;
