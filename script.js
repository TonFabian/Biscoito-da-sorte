var frasesBiscoito = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e sabedoria em todas as suas ações.",
  "Acredite em milagres, mas não dependa deles.",
  "Seja a mudança que você deseja ver no mundo.",
  "A persistência é o caminho do êxito.",
  "Grandes realizações exigem grande dedicação.",
  "A sorte favorece a mente bem preparada.",
  "Siga os seus sonhos com determinação e paixão.",
  "A verdadeira sabedoria está em reconhecer a própria ignorância.",
  "Cada novo dia é uma oportunidade para ser feliz.",
  "Acredite nas suas ideias, mesmo que todos duvidem.",
  "O sucesso nasce do querer, da determinação e persistência.",
  "Mantenha-se positivo, coisas boas acontecerão.",
  "A alegria está na jornada, não apenas no destino.",
  "A vida é feita de escolhas, faça as melhores.",
  "Sua jornada começa com um único passo. Faça-o com confiança.",
  "A gratidão transforma o que temos em suficiente.",
  "Seja a luz que ilumina o caminho dos outros.",
  "O que você planta hoje, colherá amanhã.",
  "A verdadeira felicidade vem de dentro.",
  "A cada dia, uma nova oportunidade para recomeçar.",
  "Acredite na magia que existe dentro de você.",
  "A vida é cheia de surpresas. Esteja aberto a elas.",
  "O otimismo é a fé que leva à realização.",
  "A gentileza é uma linguagem que o surdo pode ouvir e o cego pode ver.",
  "Não há atalhos para qualquer lugar que valha a pena ir.",
];

var biscoitoContainer = document.getElementById("biscoitoContainer");
var aberto = document.getElementById("aberto");
var btnAgain = document.getElementById("btnAgain");
var fraseContainer = document.getElementById("fraseContainer");
var fraseElement = document.getElementById("frase");

biscoitoContainer.addEventListener("click", function () {
  document.querySelector(".screen1").style.display = "none";
  document.querySelector(".screen2").style.display = "block";
  aberto.style.display = "block";

  var fraseAleatoria =
    frasesBiscoito[Math.floor(Math.random() * frasesBiscoito.length)];

  fraseElement.textContent = fraseAleatoria;
});

btnAgain.addEventListener("click", function () {
  document.querySelector(".screen1").style.display = "block";
  document.querySelector(".screen2").style.display = "none";
  aberto.style.display = "none";
});
