let str = "abc123d4e";
const sumDigist = (str) => {
  let char = "";
  let currentChar = str;
  let currentI;
  let totalAmount = 0;

  for (let i = 0; str.length > i; i++) {
    console.log(`Итерация № ${i} ${currentChar[i]}`);
    currentI = Number(currentChar[i]);

    if (!Number.isNaN(currentI)) {
      char += currentI;
    } else {
      if (char) {
        totalAmount += Number(char);
        String(char);
        char = "";
      }
    }
  }
  let resultSum = Number(char) + totalAmount;

  return resultSum;
};

console.log(`Результат - ${sumDigist(str)}`);
