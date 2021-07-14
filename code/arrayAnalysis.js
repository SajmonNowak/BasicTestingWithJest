

const arrayAnalysis = (array) => {
  const getAverage = () => {
    return array.reduce((num, num2) => num + num2) / array.length;
  };

  const getMin = () => {
    return Math.min(...array);
  };

  const getMax = () => {
    return Math.max(...array);
  };

  const getLength = () => {
    return array.length;
  };

  const analysis = () => {
    return {
      average: getAverage(),
      min: getMin(),
      max: getMax(),
      length: getLength(),
    };
  };

   return analysis();
};

console.log(arrayAnalysis([1,2,3,4,5]));

module.exports= arrayAnalysis