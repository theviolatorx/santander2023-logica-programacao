// elementos do html
const userID = document.getElementById("userID");
const passID = document.getElementById("passID");

const procButton = document.getElementById("procButton");
const resultDiv = document.getElementById("resultDiv");

dataList = [
  {nome: "Rafael Assunção Jr.", user: "rafael.assuncao", pass: "asd123"},
  {nome: "Gabriel Áureo de Balestero Neto", user: "gabriel.aureo", pass: "ASD123"},
  {nome: "Giovana Mel de Esteves", user: "giovana.mel", pass: "!@#ASD"},
  {nome: "Ana Delatorre Guerra", user: "ana.delatorre", pass: "#@!EWQ"},
  {nome: "Nilton Quico de D'ávila Jr.", user: "nilton.quico", pass: "qwe#@!"},
  {nome: "Thales Márcio de Aragão Filho", user: "thales.marcio", pass: "!Q@w#e"},
  {nome: "Augusto Carmona Sobrinho", user: "augusto.carmona", pass: "Q!w@E#"},
  {nome: "Taís Tessália Estrada de Gil", user: "tais.tessália", pass: "1q2w3e"},
  {nome: "Ariadna Martines Rodrigues", user: "ariadna.martines", pass: "q1w2e3"},
  {nome: "Helena Balestero de Camargo", user: "helena.balestero", pass: "ZXCqwe"},
  {nome: "Caio Barreto Neto", user: "caio.barreto", pass: "asdZXC"},
  {nome: "Danielle Benites de Galvão", user: "danielle.benites", pass: "dsacxz"},
  {nome: "Carla Margarida Ferraz Marin", user: "carla.margarida", pass: "CDE#2wsxZAQ!"},
  {nome: "Malena Abreu", user: "malena.abreu", pass: "xsw@2wsx"},
  {nome: "Allison Mikaella Ferreira de Medeiros", user: "allison.mikaella", pass: "zse$!wdv"},
  {nome: "Jairo Esteves Sobrinho", user: "jairo.esteves", pass: "ZSQ@!WAX"},
  {nome: "Ingrid Brito de Leal", user: "ingrid.brito", pass: "xaw12qsz"},
  {nome: "Humberto Wagner Caldeira de Angola", user: "humberto.wagner", pass: "amor"},
  {nome: "Gustavo Delvalle de Faro", user: "gustavo.delvalle", pass: "321123"},
  {nome: "Carla Regina Barros de Espinoza", user: "carla.regina", pass: "012asd"},
  {nome: "Alisson Wesley Dias Jr.", user: "alisson.wesley", pass: "4332211"},
  {nome: "Adriana Marcela Campos", user: "adriana.marcela", pass: "pazmundial"},
  {nome: "Clara Jéssica Espinoza", user: "clara.jessica", pass: "Deus"},
  {nome: "Paulina Garcia Lutero", user: "paulina.garcia", pass: "paulina.garcia"},
  {nome: "Edu Galvão", user: "edu.galvao", pass: "eduedu"},
];

// Ouvinte evento button

let mensagem;
procButton.addEventListener("click", () => {
  const usuario = userID.value;
  const senha = passID.value;
  console.log(`-${usuario}-`);
  console.log(typeof senha);
  console.log(usuario == "");

  
  if (usuario == "" || senha == "") {
    mensagem = "Informe um usuário e uma senha!";
  }  else if ((dataList.find((user) => user.user == usuario)) && 
  (dataList.find((user) => user.pass == senha))) {
    mensagem = "<strong>Seja bem-vindo! Acesso liberado!<strong>";
  } else {
    mensagem = "<strong>Usuário ou Senha inválidos";
  }

  resultDiv.innerHTML = ` ${mensagem} `;
});