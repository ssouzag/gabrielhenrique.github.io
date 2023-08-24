const valorMaragogi = 1499;
const valorEgito = 2000;
const valorMaldivas = 2999;


const resultElement = document.getElementById('result');
const inputNumber = document.getElementById('inputNumber');
const calculateButton = document.getElementById('btn');
calculateButton.addEventListener('click', () => {
  const inputValue = parseFloat(inputNumber.value);
  
  if (inputValue>0) {
    const calculatedValue = inputValue * valorMaragogi;
    resultElement.textContent = `O valor do pacote saira por: R$ ${calculatedValue}` ;
  } else {
    resultElement.textContent = 'Por favor, insira um número válido.';
  }


})

const inputNumber1 = document.getElementById('inputNumber1');
const calculateButton1 = document.getElementById('btn1');
const resultElement1 = document.getElementById('result1');
calculateButton1.addEventListener('click', () => {
  const inputValue1 = parseFloat(inputNumber1.value);
  
  if (inputValue1>0) {
    const calculatedValue1 = inputValue1 * valorEgito;
    resultElement1.textContent = `O valor do pacote saira por: R$ ${calculatedValue1}` ;
  } else {
    resultElement1.textContent = 'Por favor, insira um número válido.';
  }


})

const inputNumber2 = document.getElementById('inputNumber2');
const calculateButton2 = document.getElementById('btn2');
const resultElement2 = document.getElementById('result2');
calculateButton2.addEventListener('click', () => {
  const inputValue2 = parseFloat(inputNumber2.value);
  
  if (inputValue2>0) {
    const calculatedValue2 = inputValue2 * valorMaldivas;
    resultElement2.textContent = `O valor do pacote saira por: R$ ${calculatedValue2}` ;
  } else {
    resultElement2.textContent = 'Por favor, insira um número válido.';
  }


});