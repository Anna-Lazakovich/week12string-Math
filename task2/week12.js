//Задание 2.1

const text = document.querySelector('#text').innerHTML;
//const resultOne = document.querySelector('#resultOne');
//const resultTwo = document.querySelector('#resultTwo');

//console.log(text.length);

//Задание 2.2
const result = text.replace(/;/g, ';\n');
//resultOne.textContent = result;
//console.log(result);

//Задание 2.3
const substring = result.replace(/\s/g, '');
//resultTwo.textContent = substring;
//console.log(substring);

//Задание 2.4
const newText = result.substring(28, 51);
//console.log(newText);

//Задание 2.5
const replacedText = newText.replace('клён', 'дубе');
//console.log(replacedText);

//Задание 2.6
const replacedText2 = result.toUpperCase();
//console.log(replacedText2);

//Задание 2.7
const replacedText3 = result.replace(/клён/g, 'дуб');
//console.log(replacedText3);

//Задание 2.8
const index = text.indexOf('моря');
//console.log(index);

//Задание 2.9
const firstLetter  = replacedText[0].toUpperCase();
const modifiedText = firstLetter + replacedText.substring(1);
//console.log (modifiedText);

//Задание 2.10
console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
