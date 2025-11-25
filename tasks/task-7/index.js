const str = "Elon Mask";

const toInitials = (str) => {
  let wordOne = "";
  let wordTwo = "";
  let initialOne;
  let initialTwo;
  let initialUpper;
  let result;
  const words = str.split(" ");
  wordOne = words[0];
  wordTwo = words[1];
  initialOne = wordOne[0];
  initialTwo = wordTwo[0];
  result = `${initialOne}.${initialTwo}.`;
  initialUpper = result.toUpperCase();
  console.log(initialUpper);
  return initialUpper;
};

toInitials(str);
