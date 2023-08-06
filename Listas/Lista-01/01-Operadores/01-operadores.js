// elementos do html

const baseRet = document.getElementById('baseRet');
const alturaRet = document.getElementById('alturaRet');
const calcButton = document.getElementById('calcButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

calcButton.addEventListener('click', () => {
    // converter entrada para float
    const base = parseFloat(baseRet.value);
    const altura = parseFloat(alturaRet.value);

    // verificar validade
    if(isNaN(base) || isNaN(altura)){
        mensagem = '<strong>Por favor, insira um valor válido!</strong>';
    } else {
        // calcular a área do retângulo
        const areaRet = base * altura
        mensagem = `<strong>A área do retângulo de altura ${altura}u e base ${base}u é de ${areaRet}u²<strong>`;
    }

    resultDiv.innerHTML = mensagem;
})