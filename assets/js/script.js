 // Seleciona os elementos
  const botaoMenu = document.querySelector('.botao-menu');
  const menuLateral = document.querySelector('.menu-lateral');
  const botaoFecharMenu = document.querySelector('.fechar-menu');
  const formularioPesquisa = document.querySelector('.formulario-pesquisa');
  const textoPesquisar = document.querySelector('.texto-pesquisar');

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
      formularioPesquisa.querySelector('input').focus();
    }
  });