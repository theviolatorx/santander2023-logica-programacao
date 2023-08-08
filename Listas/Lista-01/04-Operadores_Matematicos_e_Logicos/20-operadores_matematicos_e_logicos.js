// elementos do html
const numAno = document.getElementById("numAno");

const procButton = document.getElementById("procButton");
const resultDiv = document.getElementById("resultDiv");

// Ouvinte evento button

procButton.addEventListener("click", () => {
  const nAno = parseInt(numAno.value);

  // verificar validade
  if (isNaN(nAno)) {
    mensagem = "<strong>Por favor, insira um valor válido!</strong>";
  } else {
    // calcular ase é ano bissexto

    if ((nAno % 100 === 0) && (nAno % 400 === 0)){
      mensagem = `é`;
    } else if (nAno % 4 === 0){
      mensagem = `é`;
    } else {
      mensagem = `não é`;
    }
  }
  resultDiv.innerHTML = `<strong>O número ${nAno} ${mensagem} bissexto!<strong>`;
});
