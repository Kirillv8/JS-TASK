let value = "rail safety";
let value2 = "fairy tales";
let res1 = value.split(" ").join("");
let res2 = value2.split(" ").join("");
value = res1.toLocaleLowerCase();
value2 = res2.toLocaleLowerCase();

const anagram = (value, value2) => {
  let currentChar;
  let currentChar2;
  const charObj = {};
  for (let i = 0; i < value.length; i++) {
    currentChar = value[i];
    if (charObj[currentChar]) {
      charObj[currentChar] = charObj[currentChar] + 1;
    } else {
      charObj[currentChar] = 1;
    }
  }

  for (let i = 0; i < value2.length; i++) {
    currentChar2 = value2[i];
    if (charObj[currentChar2]) {
      charObj[currentChar2] = charObj[currentChar2] - 1;
    } else {
      return false;
    }
  }

  return true;
};
console.log(anagram(value, value2));
