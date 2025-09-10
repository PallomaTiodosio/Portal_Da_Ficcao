const slides = document.getElementById('slides');
        const indicators = document.getElementById('indicators');
        const buttons = document.querySelectorAll('.indicator');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');
        let currentIndex = 0;
        const totalSlides = 9;

        // Criar indicadores
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('indicator');
            dot.addEventListener('click', () => goToSlide(i));
            indicators.appendChild(dot);
        }
        const allIndicators = document.querySelectorAll('.indicator');
        allIndicators[0].classList.add('active');

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlides();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlides();
        });

        function updateSlides() {
            slides.style.transform = `translateX(-${currentIndex * (100 / totalSlides)}%)`;
            allIndicators.forEach((ind, index) => {
                ind.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlides();
        }

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



