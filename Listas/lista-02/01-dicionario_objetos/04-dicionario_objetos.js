// elementos do html
let livro = {
    titulo: "A Arte de Criar Exercícios",
    autor: "Jaque Laurenti",
    ano_publicacao: 1999,
    genero: "Educação",
    paginas: 255,
}


const calcButton = document.getElementById('calcButton');
const resultDiv = document.getElementById('resultDiv');

let mensagem;
// Ouvinte evento button

calcButton.addEventListener('click', () => {
    
    mensagem = `<strong>Título do aluno:<strong> ${livro.titulo}<br>`;
    mensagem += `<strong>Autor do aluno:<strong> ${livro.autor} anos<br>`;
    mensagem += `<strong>Ano da publicação do aluno:<strong> ${livro.ano_publicacao}<br>`;
    mensagem += `<strong>Genero do aluno:<strong> ${livro.genero}<br>`;
    mensagem += `<strong>Número de páginas aluno:<strong> ${livro.paginas}<br>`;


    resultDiv.innerHTML = mensagem;
})