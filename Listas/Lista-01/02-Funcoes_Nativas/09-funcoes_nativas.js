// elementos do html

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const calcButton = document.getElementById('calcButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

calcButton.addEventListener('click', () => {
    const n1 = parseInt(num1.value);
    console.log(n1);
    const n2 = parseInt(num2.value);

    if(isNaN(n1) || isNaN(n2)){
        mensagem = '<strong>Por favor, insira um valor válido!</strong>';
    } else {        
        mensagem = `<strong>O número sorteado é: ${randNum(n1, n2)}<strong>`;
    }

    resultDiv.innerHTML = mensagem;
})

function randNum(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    
}