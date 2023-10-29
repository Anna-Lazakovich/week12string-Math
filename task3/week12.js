//Задание 2.1

const weight = parseFloat(document.querySelector('#inputweight').value);
const height = parseFloat(document.querySelector('#inputheight').value);
const resultBMI = document.querySelector('#result');
const button = document.querySelector('#button');

const calculateBMI = (weight, height) => {
	const sqrheight = parseFloat(Math.pow(height, 2));
	const result = parseFloat(Math.round(weight / sqrheight * 100.0) / 100.0);
	resultBMI.textContent = (`Индекс массы тела: ${result}`);
};

button.addEventListener('click', calculateBMI);