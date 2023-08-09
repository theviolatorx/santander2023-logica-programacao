// elementos do html
let estudante = {
    nome: "Clóvis Garcia",
    idade: 48,
    curso: "Engenharia da Computação",
    nota: 8.50,
}


const calcButton = document.getElementById('calcButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

calcButton.addEventListener('click', () => {
    
    mensagem = `<strong>Nome do aluno:<strong> ${estudante.nome}<br>`;
    mensagem += `<strong>Idade do aluno:<strong> ${estudante.idade} anos<br>`;
    mensagem += `<strong>Curso do aluno:<strong> ${estudante.curso}<br>`;
    mensagem += `<strong>Nota do aluno:<strong> ${estudante.nota.toFixed(2)}<br>`;


    resultDiv.innerHTML = mensagem;
})