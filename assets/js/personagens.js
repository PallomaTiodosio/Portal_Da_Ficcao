const personagens = document.querySelectorAll('#carrossel-personagens .atores');
const btnAnterior = document.getElementById('carrossel-anterior');
const btnProximo = document.getElementById('carrossel-proximo');
const titulo = document.querySelector('.titulo h1');

const titulos = [
  "Elenco Clássico",
  "Trilogia Prequela",
  "Trilogia Sequela"
];

let inicio = 0;
const visiveis = 3;

function mostrarPersonagens() {
  personagens.forEach((div, i) => {
    if (i >= inicio && i < inicio + visiveis) {
      div.classList.remove('oculto');
    } else {
      div.classList.add('oculto');
    }
  });
  const grupo = Math.floor(inicio / visiveis);
  titulo.textContent = titulos[grupo] || titulos[0];
}

btnAnterior.addEventListener('click', () => {
  inicio -= visiveis;
  if (inicio < 0) {
    inicio = personagens.length - visiveis;
    if (inicio < 0) inicio = 0; // caso tenha menos personagens que visiveis
  }
  mostrarPersonagens();
});

btnProximo.addEventListener('click', () => {
  inicio += visiveis;
  if (inicio >= personagens.length) {
    inicio = 0;
  }
  mostrarPersonagens();
});

mostrarPersonagens();