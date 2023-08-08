// elementos do html

const var1 = function name(params) {
    return params;
};
const var2 = "Teste";

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');


// Ouvinte evento button

procButton.addEventListener('click', () => {

    // 
    let mensagem = `<strong>A variável <code>var1</code> é do tipo <code>${typeof var1}</code><br>`;
    mensagem += `<strong>A variável <code>var2</code> é do tipo <code>${typeof var2}</code><br>`;


    resultDiv.innerHTML = mensagem;
})