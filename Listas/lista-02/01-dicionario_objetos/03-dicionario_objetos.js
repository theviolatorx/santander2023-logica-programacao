// elementos do html

const resultDiv = document.getElementById('totalCesta');


const calcButton = document.getElementById('calcButton');

const frutasCesta ={
    Carambola: 1,
    Maça: 2,
    Pera: 3,
    Abacate: 4,
    Pitaia: 5,
    Abacaxi: 6,
}


// Ouvinte evento button

calcButton.addEventListener('click', () => {

    
    precos = Object.values(frutasCesta)

    // verificar validade
    const soma = precos.reduce((acumulador, preco) => acumulador + preco);

    const mensagem = `<strong>R$ ${soma.toFixed(2)}<strong>`;


    resultDiv.innerHTML = mensagem;
})