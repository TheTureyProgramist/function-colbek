// const items = ['Mango', 'Poly', 'Ajax'];
// function logItems(listik) {
//   const findItems = [];
//   for (let i = 0; i < listik.length; i++) {
//     findItems.push(`${listik[i]}`);
//   }
//   return findItems;
// }
// const result = logItems(items);
// console.log(result);
// // const items = ['Mango', 'Poly', 'Ajax'];              Масив
// // function logItems(listik) {                           Параметр
// //   const findItems = [];
// //   for (let i = 0; i < listik.length; i++) {           Цикл фор
// //     findItems.push(`${listik[i]}`);
// //   }
// //   return findItems;                                   Повернення результату
// // }
// // const result = logItems(items);                       Збереження даних
// // console.log(result);                                  Аргумент + Консоль

// const message = "Гравіюємо прикрасy";
// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   return words.length * pricePerWord;
// }
// // Дробарка розрубала код
// console.log(calculateEngravingPrice(message, 900));

// const text = 'Спи спи спи мій друже індичку';
// function findLongestWord(text) {
//   const find = text.split(' ');
//   let longestWord = find[0];
//   for (const texts of find) {
//     if (texts.length > longestWord.length) {
//       longestWord = texts;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord(text));

// const shortText = 'Індик-1';
// const longText = 'Індик-1 Індик-2 Індик-3 Індик-4 Індик-5 Індик-6';
// function formatString(inputString) {
//   if (inputString.length < 39) {
//     return inputString;
//   }
//   return inputString.slice(0, 40) + '...(Далі текст буде)';
// }
// console.log(formatString(shortText));
// console.log(formatString(longText));

// const firstMessage = 'Прекрасні ціни на навушники індо-ніндзя';
// const secondMessage = 'Платіжка за непотрібні речі';
// function checkForSpam(inputMessage) {
//   const lowerCaseMessage = inputMessage.toLowerCase();
//   return lowerCaseMessage.includes('прекрасні') || lowerCaseMessage.includes('ціни');
// }
// console.log(checkForSpam(firstMessage));
// console.log(checkForSpam(secondMessage));
//---------------------------------------------------------------------------

function Message() {
  alert('Привіт світ!');
}

function UserInput(action) {
  const input = prompt('Натисніть на кнопку');
  if (input !== null) {
    action();
  }
}

UserInput(Message);

const randNum = Math.floor(Math.random() * 10) + 1;
console.log(`Згенероване число ${randNum}`); // Додаємо виведення випадкового числа для тестування

function check() {
  const guessInput = prompt('Вгадайте число 1-10');
  if (guessInput === null) {
    alert('Гру завершено, ви вийшли');
    return;
  }
  const guess = Number(guessInput);
  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert('Введіть число 1-10. Не допустиме порожне поле, букви, знаки. Тільки числа 1-10');
    check();
  } else if (guess === randNum) {
    alert('Ви вгадали!');
  } else if (guess > randNum) {
    alert('Забагато!');
    check();
  } else {
    alert('Замало!');
    check();
  }
}
check();

function calculateDiscountedPrice(price, discount, callback) {
  const discountedPrice = price - (price * discount / 100);
  callback(discountedPrice);
}

function showDiscountedPrice(price) {
  console.log(`Ціна: ${price.toFixed(2)} грн`);
}
calculateDiscountedPrice(200, 20, showDiscountedPrice);

function applyCallbackToEachElement(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result; 
}

function squareCallback(num) {
  return num * num; 
}

const arr = [1, 2, 3, 4, 5];
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); // [1, 4, 9, 16, 25]
