const reverseStringOne = (string) => {
  let resultString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    // let res = string.slice(0 + i - 1);
    resultString = string[i];

    console.log(resultString);
  }
  return resultString;
};
// reverseStringOne('hello');
console.log(reverseStringOne('hello'));
