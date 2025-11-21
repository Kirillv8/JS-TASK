// const str = "The Smallest word in sentence";
const str = "Just test string";

const findShortest = (str) => {
  const result = str.split(" ");

  let litleShortest = result[0];
  console.log(litleShortest);

  for (let i = result.length - 1; i >= 0; i--) {
    let curentShortest = result[i];
    console.log(`На текущей итерации ${i} сравниваем слово ${curentShortest}`);

    if (litleShortest.length > curentShortest.length) {
      litleShortest = curentShortest;
    }
  }
  return litleShortest;
};

console.log(findShortest(str));
