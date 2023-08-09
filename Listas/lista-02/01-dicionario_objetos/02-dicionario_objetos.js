// elementos do html

const getPais = document.getElementById("pais");

const calcButton = document.getElementById("calcButton");
const resultDiv = document.getElementById("resultDiv");
// TODO: Dicionário Países
const paises = {
  Afeganistão: "Cabul",
  Cabul: "Ásia",
  "África do Sul": "Pretória",
  Pretória: "África",
  Albânia: "Tirana",
  Tirana: "Europa",
  Alemanha: "Berlim",
  Berlim: "Europa",
  Andorra: "Andorra-a-Velha",
  "Andorra-a-Velha": "Europa",
  Angola: "Luanda",
  Luanda: "África",
  "Antiga e Barbuda": "São João",
  "São João": "América",
  "Arábia Saudita": "Riade",
  Riade: "Ásia",
  Argélia: "Argel",
  Argel: "África",
  Argentina: "Buenos Aires",
  "Buenos Aires": "América",
  Arménia: "Erevã",
  Erevã: "Ásia",
  Austrália: "Camberra",
  Camberra: "Oceania",
  Áustria: "Viena",
  Viena: "Europa",
  Azerbaijão: "Bacu",
  Bacu: "Ásia",
  Bahamas: "Nassau",
  Nassau: "América",
  Bangladexe: "Daca",
  Daca: "Ásia",
  Barbados: "Bridgetown",
  Bridgetown: "América",
  Barém: "Manama",
  Manama: "Ásia",
  Bélgica: "Bruxelas",
  Bruxelas: "Europa",
  Belize: "Belmopã",
  Belmopã: "América",
  Benim: "Porto Novo",
  "Porto Novo": "África",
  Bielorrússia: "Minsque",
  Minsque: "Europa",
  Bolívia: "Sucre",
  Sucre: "América",
  "Bósnia e Herzegovina": "Saraievo",
  Saraievo: "Europa",
  Botsuana: "Gaborone",
  Gaborone: "África",
  Brasil: "Brasília",
  Brasília: "América",
  Brunei: "Bandar Seri Begauã",
  "Bandar Seri Begauã": "Ásia",
  Bulgária: "Sófia",
  Sófia: "Europa",
  "Burquina Faso": "Uagadugu",
  Uagadugu: "África",
  Burúndi: "Bujumbura",
  Bujumbura: "África",
  Butão: "Timbu",
  Timbu: "Ásia",
  "Cabo Verde": "Praia",
  Praia: "África",
  Camarões: "Iaundé",
  Iaundé: "África",
  Camboja: "Pnom Pene",
  "Pnom Pene": "Ásia",
  Canadá: "Otava",
  Otava: "América",
  Catar: "Doa",
  Doa: "Ásia",
  Cazaquistão: "Astana",
  Astana: "Ásia",
  Chade: "Jamena",
  Jamena: "África",
  Chile: "Santiago",
  Santiago: "América",
  China: "Pequim",
  Pequim: "Ásia",
  Chipre: "Nicósia",
  Nicósia: "Europa",
  Colômbia: "Bogotá",
  Bogotá: "América",
  Comores: "Moroni",
  Moroni: "África",
  "Congo-Brazzaville": "Brazavile",
  Brazavile: "África",
  "Coreia do Norte": "Pionguiangue",
  Pionguiangue: "Ásia",
  "Coreia do Sul": "Seul",
  Seul: "Ásia",
  Cosovo: "Pristina",
  Pristina: "Europa",
  "Costa do Marfim": "Iamussucro",
  Iamussucro: "África",
  "Costa Rica": "São José",
  "São José": "América",
  Croácia: "Zagrebe",
  Zagrebe: "Europa",
  Cuaite: "Cidade do Cuaite",
  "Cidade do Cuaite": "Ásia",
  Cuba: "Havana",
  Havana: "América",
  Dinamarca: "Copenhaga",
  Copenhaga: "Europa",
  Dominica: "Roseau",
  Roseau: "América",
  Egito: "Cairo",
  Cairo: "África",
  "Emirados Árabes Unidos": "Abu Dabi",
  "Abu Dabi": "Ásia",
  Equador: "Quito",
  Quito: "América",
  Eritreia: "Asmara",
  Asmara: "África",
  Eslováquia: "Bratislava",
  Bratislava: "Europa",
  Eslovénia: "Liubliana",
  Liubliana: "Europa",
  Espanha: "Madrid",
  Madrid: "Europa",
  Essuatíni: "Lobamba",
  Lobamba: "África",
  "Estado da Palestina": "Jerusalém Oriental",
  "Jerusalém Oriental": "Ásia",
  "Estados Unidos": "Washington, D.C.",
  "Washington, D.C.": "América",
  Estónia: "Talim",
  Talim: "Europa",
  Etiópia: "Adis Abeba",
  "Adis Abeba": "África",
  Fiji: "Suva",
  Suva: "Oceania",
  Filipinas: "Manila",
  Manila: "Ásia",
  Finlândia: "Helsínquia",
  Helsínquia: "Europa",
  França: "Paris",
  Paris: "Europa",
  Gabão: "Libreville",
  Libreville: "África",
  Gâmbia: "Banjul",
  Banjul: "África",
  Gana: "Acra",
  Acra: "África",
  Geórgia: "Tebilíssi",
  Tebilíssi: "Ásia",
  Granada: "São Jorge",
  "São Jorge": "América",
  Grécia: "Atenas",
  Atenas: "Europa",
  Guatemala: "Cidade da Guatemala",
  "Cidade da Guatemala": "América",
  Guiana: "Georgetown",
  Georgetown: "América",
  Guiné: "Conacri",
  Conacri: "África",
  "Guiné Equatorial": "Malabo",
  Malabo: "África",
  "Guiné-Bissau": "Bissau",
  Bissau: "África",
  Haiti: "Porto Príncipe",
  "Porto Príncipe": "América",
  Honduras: "Tegucigalpa",
  Tegucigalpa: "América",
  Hungria: "Budapeste",
  Budapeste: "Europa",
  Iémen: "Saná",
  Saná: "Ásia",
  "Ilhas Marechal": "Majuro",
  Majuro: "Oceania",
  Índia: "Nova Déli",
  "Nova Déli": "Ásia",
  Indonésia: "Jacarta",
  Jacarta: "Ásia",
  Irão: "Teerão",
  Teerão: "Ásia",
  Iraque: "Bagdade",
  Bagdade: "Ásia",
  Irlanda: "Dublim",
  Dublim: "Europa",
  Islândia: "Reiquiavique",
  Reiquiavique: "Europa",
  Israel: "Jerusalém",
  Jerusalém: "Ásia",
  Itália: "Roma",
  Roma: "Europa",
  Jamaica: "Kingston",
  Kingston: "América",
  Japão: "Tóquio",
  Tóquio: "Ásia",
  Jibuti: "Jibuti",
  Jibuti: "África",
  Jordânia: "Amã",
  Amã: "Ásia",
  Laus: "Vienciana",
  Vienciana: "Ásia",
  Lesoto: "Maseru",
  Maseru: "África",
  Letónia: "Riga",
  Riga: "Europa",
  Líbano: "Beirute",
  Beirute: "Ásia",
  Libéria: "Monróvia",
  Monróvia: "África",
  Líbia: "Trípoli",
  Trípoli: "África",
  Listenstaine: "Vaduz",
  Vaduz: "Europa",
  Lituânia: "Vílnius",
  Vílnius: "Europa",
  Luxemburgo: "Luxemburgo",
  Luxemburgo: "Europa",
  "Macedónia do Norte": "Escópia",
  Escópia: "Europa",
  Madagáscar: "Antananarivo",
  Antananarivo: "África",
  Malásia: "Cuala Lumpur",
  "Cuala Lumpur": "Ásia",
  Maláui: "Lilôngue",
  Lilôngue: "África",
  Maldivas: "Malé",
  Malé: "Ásia",
  Mali: "Bamaco",
  Bamaco: "África",
  Malta: "Valeta",
  Valeta: "Europa",
  Marrocos: "Rebate",
  Rebate: "África",
  Maurícia: "Porto Luís",
  "Porto Luís": "África",
  Mauritânia: "Nuaquechote",
  Nuaquechote: "África",
  México: "Cidade do México",
  "Cidade do México": "América",
  Mianmar: "Nepiedó",
  Nepiedó: "Ásia",
  Micronésia: "Paliquir",
  Paliquir: "Oceania",
  Moçambique: "Maputo",
  Maputo: "África",
  Moldávia: "Quixinau",
  Quixinau: "Europa",
  Mónaco: "Mónaco",
  Mónaco: "Europa",
  Mongólia: "Ulã Bator",
  "Ulã Bator": "Ásia",
  Montenegro: "Podgoritsa",
  Podgoritsa: "Europa",
  Namíbia: "Vinduque",
  Vinduque: "África",
  Nauru: "Iarém",
  Iarém: "Oceania",
  Nepal: "Catmandu",
  Catmandu: "Ásia",
  Nicarágua: "Manágua",
  Manágua: "América",
  Níger: "Niamei",
  Niamei: "África",
  Nigéria: "Abuja",
  Abuja: "África",
  Noruega: "Oslo",
  Oslo: "Europa",
  "Nova Zelândia": "Wellington",
  Wellington: "Oceania",
  Omã: "Mascate",
  Mascate: "Ásia",
  "Países Baixos": "Amesterdão",
  Amesterdão: "Europa",
  Palau: "Ngerulmud",
  Ngerulmud: "Oceania",
  Panamá: "Cidade do Panamá",
  "Cidade do Panamá": "América",
  "Papua Nova Guiné": "Porto Moresby",
  "Porto Moresby": "Oceania",
  Paquistão: "Islamabade",
  Islamabade: "Ásia",
  Paraguai: "Assunção",
  Assunção: "América",
  Peru: "Lima",
  Lima: "América",
  Polónia: "Varsóvia",
  Varsóvia: "Europa",
  Portugal: "Lisboa",
  Lisboa: "Europa",
  Quénia: "Nairóbi",
  Nairóbi: "África",
  Quirguistão: "Bisqueque",
  Bisqueque: "Ásia",
  Quiribáti: "Taraua do Sul",
  "Taraua do Sul": "Oceania",
  "Reino Unido": "Londres",
  Londres: "Europa",
  "República Centro-Africana": "Bangui",
  Bangui: "África",
  "República Checa": "Praga",
  Praga: "Europa",
  "República Democrática do Congo": "Quinxassa",
  Quinxassa: "África",
  "República Dominicana": "São Domingos",
  "São Domingos": "América",
  Roménia: "Bucareste",
  Bucareste: "Europa",
  Ruanda: "Quigali",
  Quigali: "África",
  Rússia: "Moscovo",
  Moscovo: "Europa",
  Salomão: "Honiara",
  Honiara: "Oceania",
  Salvador: "São Salvador",
  "São Salvador": "América",
  Samoa: "Apia",
  Apia: "Oceania",
  "Santa Lúcia": "Castries",
  Castries: "América",
  "São Cristóvão e Neves": "Basseterre",
  Basseterre: "América",
  "São Marinho": "São Marinho",
  "São Marinho": "Europa",
  "São Tomé e Príncipe": "São Tomé",
  "São Tomé": "África",
  "São Vicente e Granadinas": "Kingstown",
  Kingstown: "América",
  Seicheles: "Vitória",
  Vitória: "África",
  Senegal: "Dacar",
  Dacar: "África",
  "Serra Leoa": "Freetown",
  Freetown: "África",
  Sérvia: "Belgrado",
  Belgrado: "Europa",
  Singapura: "Singapura",
  Singapura: "Ásia",
  Síria: "Damasco",
  Damasco: "Ásia",
  Somália: "Mogadíscio",
  Mogadíscio: "África",
  "Sri Lanca": "Sri Jaiavardenapura-Cota",
  "Sri Jaiavardenapura-Cota": "Ásia",
  Sudão: "Cartum",
  Cartum: "África",
  "Sudão do Sul": "Juba",
  Juba: "África",
  Suécia: "Estocolmo",
  Estocolmo: "Europa",
  Suíça: "Berna",
  Berna: "Europa",
  Suriname: "Paramaribo",
  Paramaribo: "América",
  Tailândia: "Banguecoque",
  Banguecoque: "Ásia",
  Taiuã: "Taipé",
  Taipé: "Ásia",
  Tajiquistão: "Duchambé",
  Duchambé: "Ásia",
  Tanzânia: "Dodoma",
  Dodoma: "África",
  "Timor-Leste": "Díli",
  Díli: "Oceania",
  Togo: "Lomé",
  Lomé: "África",
  Tonga: "Nucualofa",
  Nucualofa: "Oceania",
  "Trindade e Tobago": "Porto de Espanha",
  "Porto de Espanha": "América",
  Tunísia: "Tunes",
  Tunes: "África",
  Turcomenistão: "Asgabate",
  Asgabate: "Ásia",
  Turquia: "Ancara",
  Ancara: "Ásia",
  Tuvalu: "Funafuti",
  Funafuti: "Oceania",
  Ucrânia: "Quieve",
  Quieve: "Europa",
  Uganda: "Campala",
  Campala: "África",
  Uruguai: "Montevideu",
  Montevideu: "América",
  Usbequistão: "Tasquente",
  Tasquente: "Ásia",
  Vanuatu: "Porto Vila",
  "Porto Vila": "Oceania",
  Vaticano: "Vaticano",
  Vaticano: "Europa",
  Venezuela: "Caracas",
  Caracas: "América",
  Vietname: "Hanói",
  Hanói: "Ásia",
  Zâmbia: "Lusaca",
  Lusaca: "África",
  Zimbábue: "Harare",
  Harare: "África",
};

let mensagem;
// Ouvinte evento button

calcButton.addEventListener("click", () => {
  // converter entrada para float
  const pais = getPais.value;
  // TODO: switch e case
  switch (pais) {
    case "Afeganistão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "África do Sul":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Albânia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Alemanha":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Andorra":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Angola":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Antiga e Barbuda":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Arábia Saudita":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Argélia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Argentina":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Arménia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Austrália":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Áustria":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Azerbaijão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Bahamas":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Bangladexe":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Barbados":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Barém":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Bélgica":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Belize":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Benim":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Bielorrússia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Bolívia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Bósnia e Herzegovina":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Botsuana":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Brasil":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Brunei":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Bulgária":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Burquina Faso":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Burúndi":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Butão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Cabo Verde":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Camarões":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Camboja":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Canadá":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Catar":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Cazaquistão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Chade":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Chile":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "China":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Chipre":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Colômbia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Comores":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Congo-Brazzaville":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Coreia do Norte":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Coreia do Sul":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Cosovo":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Costa do Marfim":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Costa Rica":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Croácia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Cuaite":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Cuba":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Dinamarca":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Dominica":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Egito":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Emirados Árabes Unidos":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Equador":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Eritreia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Eslováquia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Eslovénia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Espanha":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Essuatíni":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Estado da Palestina":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Estados Unidos":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Estónia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Etiópia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Fiji":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Filipinas":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Finlândia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "França":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Gabão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Gâmbia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Gana":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Geórgia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Granada":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Grécia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Guatemala":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Guiana":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Guiné":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Guiné Equatorial":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Guiné-Bissau":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Haiti":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Honduras":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Hungria":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Iémen":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Ilhas Marechal":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Índia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Indonésia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Irão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Iraque":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Irlanda":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Islândia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Israel":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Itália":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Jamaica":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Japão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Jibuti":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Jordânia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Laus":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Lesoto":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Letónia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Líbano":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Libéria":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Líbia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Listenstaine":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Lituânia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Luxemburgo":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Macedónia do Norte":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Madagáscar":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Malásia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Maláui":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Maldivas":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Mali":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Malta":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Marrocos":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Maurícia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Mauritânia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "México":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Mianmar":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Micronésia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Moçambique":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Moldávia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Mónaco":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Mongólia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Montenegro":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Namíbia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Nauru":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Nepal":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Nicarágua":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Níger":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Nigéria":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Noruega":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Nova Zelândia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Omã":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Países Baixos":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Palau":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Panamá":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Papua Nova Guiné":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Paquistão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Paraguai":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Peru":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Polónia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Portugal":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Quénia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Quirguistão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Quiribáti":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Reino Unido":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "República Centro-Africana":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "República Checa":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "República Democrática do Congo":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "República Dominicana":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Roménia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Ruanda":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Rússia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Salomão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Salvador":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Samoa":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Santa Lúcia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "São Cristóvão e Neves":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "São Marinho":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "São Tomé e Príncipe":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "São Vicente e Granadinas":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Seicheles":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Senegal":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Serra Leoa":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Sérvia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Singapura":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Síria":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Somália":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Sri Lanca":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Sudão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Sudão do Sul":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Suécia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Suíça":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Suriname":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Tailândia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Taiuã":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Tajiquistão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Tanzânia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Timor-Leste":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Togo":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Tonga":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Trindade e Tobago":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Tunísia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Turcomenistão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Turquia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Tuvalu":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Ucrânia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Uganda":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Uruguai":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Usbequistão":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Vanuatu":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Vaticano":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Venezuela":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Vietname":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Zâmbia":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
    case "Zimbábue":
      mensagem = `A Capital de <strong>${pais}</strong> é </strong>${paises[pais]}<br>`;
      mensagem += `E estão localizadoos no continente <strong>${
        paises[paises[pais]]
      }</strong>`;
  }

  resultDiv.innerHTML = mensagem;
});
