// elementos do html

const var1 = null;
const var2 = undefined;

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');


// Ouvinte evento button

procButton.addEventListener('click', () => {

    // 

    // const resl = var1 === var2 ? " é igual em tipo e valor " : "Não é"
    const mensagem = `<strong>A variável <code>var1</code> ${var1 === var2 ? " é igual em tipo e valor com a " : " não é igual em tipo e valor com a "} variável <code>var2</code>`;

    resultDiv.innerHTML = mensagem;
})