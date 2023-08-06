// elementos do html

const lista1 = document.getElementById('lista1');

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');

array1 = [
    parseInt(Math.random() * 10), 
    parseInt(Math.random() * 20), 
    parseInt(Math.random() * 30), 
    parseInt(Math.random() * 40), 
    parseInt(Math.random() * 50), 
    parseInt(Math.random() * 60),
    parseInt(Math.random() * 70),
    parseInt(Math.random() * 80),
    parseInt(Math.random() * 90)
]

lista1.innerHTML = "[" + array1 + "]";

// Ouvinte evento button

procButton.addEventListener('click', () => {
    

    // concatenar as arrays
    const mensagem = `<strong>Resultado da média do array é:</strong> ${calcularMedia(array1).toFixed(2)}`;

    resultDiv.innerHTML = mensagem;
})

function calcularMedia(valores) {
  const soma = valores.reduce((acc, curr) => acc + curr, 0);
  return soma / valores.length;
}