const reverseStringOne = (string) => {
  let resultString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    resultString += string[i];
  }
  return resultString;
};

console.log(reverseStringOne('hello'));
