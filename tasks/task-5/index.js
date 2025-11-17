let strOne = "тест";
let strTwo = "Шалаш";
let loverStr = strTwo.toLocaleLowerCase();
const isPalindrome = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];

    console.log(`Итерация - ${i} вернет результат - ${res}`);
  }

  if (res === str) {
    return true;
  } else {
    return false;
  }
};

// console.log(` Функция вернула - ${isPalindrome(strOne)}`);
console.log(` Функция вернула - ${isPalindrome(loverStr)}`);
