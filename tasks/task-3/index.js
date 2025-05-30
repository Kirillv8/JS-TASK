const includesString = (stringValue, substring) => {
  let result;

  for (let i = 0; i <= stringValue.length - substring.length; i++) {
    let currentString = stringValue.slice(i, i + 3);
    if (currentString === substring) {
      result = true;
      break;
    }

    if (currentString !== substring) {
      result = false;
    }
  }
  return result;
};
console.log(
  includesString('frontend', 'end'),
  includesString('developer', 'cat')
);
