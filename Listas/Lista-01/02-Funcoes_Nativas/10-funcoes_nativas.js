// elementos do html

const num1 = document.getElementById('num1');

const calcButton = document.getElementById('calcButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

calcButton.addEventListener('click', () => {
    const n1 = parseInt(num1.value);
    console.log(n1)

    if(isNaN(n1) || (n1 >= 0 && n1 < 1) || parseFloat(num1.value) != n1){
        mensagem = '<strong>Por favor, insira um valor válido positivo e maior que zero!</strong>';
    } else {        
        mensagem = `<strong>O número ${n1} ${numPrimo(n1)}<strong>`;
    }

    resultDiv.innerHTML = mensagem;
})

function numPrimo(numero) {
    if (numero < 2 || numero < 0) {
        return ' não é primo!';
    }
    let flag = 0;
    for (let i = 2; i <= numero; i++){
        if (numero % i === 0){
            flag ++;
        }
    }
    return flag > 1 ? ` não é primo!` : ` é primo!`;
}