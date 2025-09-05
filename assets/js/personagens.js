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

 // Seleciona os elementos
  const botaoMenu = document.querySelector('.botao-menu');
  const menuLateral = document.querySelector('.menu-lateral');
  const botaoFecharMenu = document.querySelector('.fechar-menu');
  const formularioPesquisa = document.querySelector('.formulario-pesquisa');
  const textoPesquisar = document.querySelector('.texto-pesquisar');
//   const textoPesquisar = document.querySelector('#textoPesquisar'); // sua palavra "Pesquisar"
// const formularioPesquisa = document.querySelector('#formularioPesquisa');
const inputPesquisa = formularioPesquisa.querySelector('input');
  // Abre o menu lateral
  botaoMenu.addEventListener('click', () => {
    menuLateral.classList.add('ativo');
  });

  // Fecha o menu lateral
  botaoFecharMenu.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
  });

  // Alterna a barra de pesquisa
 
textoPesquisar.addEventListener('click', () => {
    formularioPesquisa.classList.toggle('ativo');
    
    if (formularioPesquisa.classList.contains('ativo')) {
        // sumir com a palavra "Pesquisar"
        textoPesquisar.style.display = 'none';
        formularioPesquisa.querySelector('input').focus();
    } else {
        // mostrar de novo quando fechar
        textoPesquisar.style.display = 'inline'; // ou 'block', dependendo do seu HTML
    }
});
