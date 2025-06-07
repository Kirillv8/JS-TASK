const reverseStringOne = (string) => {
  let resultString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    resultString += string[i];
  }
  return resultString;
};

console.log(reverseStringOne('hello'));

const test = (str) => {
  const arr = str.split('').reverse().join();
  return arr;
};

console.log(test('hello world'));
