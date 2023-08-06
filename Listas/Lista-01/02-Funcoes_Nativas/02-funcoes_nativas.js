// elementos do html

const procButton = document.getElementById('procButton');
const resultDiv = document.getElementById('resultDiv');
// Ouvinte evento button

procButton.addEventListener('click', () => {
    

    const dataAtual = new Date();
    const dia = dataAtual.getDate() < 10 ? "0" + dataAtual.getDate() : dataAtual.getDate();
    const mes = dataAtual.getMonth() < 10 ? "0" + dataAtual.getMonth() : dataAtual.getMonth();
    const ano = dataAtual.getFullYear();
    const data = dia + "/" + mes + "/" + ano;
    
    const hora = dataAtual.getHours() < 10 ? "0" + dataAtual.getHours() : dataAtual.getHours();
    const minuto = dataAtual.getMinutes() < 10 ? "0" + dataAtual.getMinutes() : dataAtual.getMinutes();
    const segundo = dataAtual.getSeconds() < 10 ? "0" + dataAtual.getSeconds() : dataAtual.getSeconds();
    const horario = hora + ":" + minuto + ":" + segundo;

    


    const mensagem = `<strong>Data Atual:</strong> ${data}<br>
                      <strong>Hora Atual:</strong> ${horario}`;

    resultDiv.innerHTML = mensagem;
})