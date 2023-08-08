// elementos do html
const numQualquer = document.getElementById("numQualquer");

const procButton = document.getElementById("procButton");
const resultDiv = document.getElementById("resultDiv");

// Ouvinte evento button

procButton.addEventListener("click", () => {
  const numQ = parseInt(numQualquer.value);

  // verificar validade
  if (isNaN(numQ)) {
    mensagem = "<strong>Por favor, insira um valor válido!</strong>";
  } else {
    // calcular a área do retângulo
    if (Math.abs(numQ % 2) === 1) {
        if (numQ >= 0) {
            mensagem = `é ímpar e positivo`;
        } else {
            mensagem = `não é positivo`;
        }
    } else {
        mensagem = `não é ímpar`;
    }
  }

  resultDiv.innerHTML = `<strong>O número ${numQ} ${mensagem}!<strong>`;
});
