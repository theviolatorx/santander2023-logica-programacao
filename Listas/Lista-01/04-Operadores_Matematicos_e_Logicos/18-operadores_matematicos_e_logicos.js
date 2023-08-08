// elementos do html
const var1 = (10 + 5) * 3 / 20;

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');


// Ouvinte evento button

procButton.addEventListener('click', () => {

    // 
    const mensagem = `<strong>(10 + 5) * 3 / 20 = ${(10 + 5) * 3 / 20}`;


    resultDiv.innerHTML = mensagem;
})