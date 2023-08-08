// elementos do html
const nomeCliente = document.getElementById("nomeCliente");
const idadeCliente = document.getElementById("idadeCliente");

const procButton = document.getElementById("procButton");
const resultDiv = document.getElementById("resultDiv");

banList = [
  "Eduardo",
  "Janaína",
  "João",
  "Vicente",
  "Ian",
  "Samuel",
  "Ornela",
  "Júlia",
  "Anderson",
  "Felícia",
  "Horácio",
  "Quésia",
  "Geraldo",
  "Aécio",
  "Adrielle",
  "Mel",
  "Luciano",
  "Márcio",
  "Camilo",
  "Fábio",
  "Hugo",
  "João",
  "Eloá",
  "Clarice",
  "Ivanete",
];
// Ouvinte evento button

let mensagem;
procButton.addEventListener("click", () => {
  const nome = nomeCliente.value;
  const idade = parseInt(idadeCliente.value);

  
  if (idade <= 18) {
    mensagem = "Não é permitido a <strong>entrada de menores de idade<strong> no clube!";
  } else if (banList.find((cliente) => removerSpecials(cliente.toLowerCase()) == removerSpecials(nome.toLowerCase()))) {
    mensagem = "Você não poderá entrar no clube porque foi <strong>Banido<strong>!";
  } else {
    mensagem = "<strong>Entrada autorizada!<strong>";
  }

  resultDiv.innerHTML = ` ${mensagem} `;
});

function removerSpecials(texto) {
  // eliminando acentuação
  texto = texto.replace(/[ÀÁÂÃÄÅ]/,"A");
  texto = texto.replace(/[àáâãäå]/,"a");
  texto = texto.replace(/[ÈÉÊË]/,"E");
  texto = texto.replace(/[Ç]/,"C");
  texto = texto.replace(/[ç]/,"c");
  return texto.replace(/[^a-z0-9]/gi,''); 
}