// Seleciona os elementos
  const botaoMenu = document.querySelector('.botao-menu');
  const gameContainer = document.querySelector('.game-container');
  const menuLateral = document.querySelector('.menu-lateral');
  const botaoFecharMenu = document.querySelector('.fechar-menu');
  const formularioPesquisa = document.querySelector('.formulario-pesquisa');
  const textoPesquisar = document.querySelector('.texto-pesquisar');
  const btnReiniciar = document.getElementById('btn-reiniciar');
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



document.addEventListener('DOMContentLoaded', () => {
    const dino = document.querySelector('.dino');
    const grid = document.querySelector('.grid');
    const alert = document.getElementById('alert');
    const scoreElement = document.getElementById('pontos');
const recordeElement = document.getElementById('recorde');
const btnrecomecar = document.getElementById('btn-reiniciar');

    // Declarando as variaveis que serão utilizado no jogo
    let pulando = false;
    let finalJogo = false;
    let gravidade = 0.9;
    let velocidade = 0;
    let botaoDino = 0;
    let pontos = 0;
    let velocidadeJogo = 6;
    let tempoObstaculos = 0;
    let obstaculosMinimo = 20;
    let obstaculosMaximo = 2500;
    let tempoUltimoObstaculo = 0;
    let dinoFrame = 0;
let recorde = localStorage.getItem('recorde') || 0;

    // Adicionando eventos de input para pulo
    document.addEventListener('keydown', jumpControl);
    document.addEventListener('touchend', jumpControl);
    

    function jumpControl(e) {
        if (!pulando && !finalJogo) {
            if (e.key === ' ' || e.type === 'touchend') {
                pulando = true;
                velocidade = 14; // Velocidade inicial do pulo
            }
        }
        if (finalJogo) {
            if (e.key === ' ' || e.type === 'touchend') {
                restartGame();
            }
        }
    }

    function gameLoop() {
        if (finalJogo) return;

        // Lógica do pulo
        if (pulando) {
            botaoDino += velocidade;
            velocidade -= gravidade;
            if (botaoDino <= 0) {
                botaoDino = 0;
                pulando = false;
            }
        }
        dino.style.bottom = `${botaoDino}px`;

        // Lógica de geração de obstáculos
        tempoObstaculos++;
        if (tempoObstaculos - tempoUltimoObstaculo > Math.random() * (obstaculosMaximo - obstaculosMinimo) + obstaculosMinimo) {
            createObstacle();
            tempoUltimoObstaculo = tempoObstaculos;
        }

        // Lógica de movimento e colisão
        const obstacles = document.querySelectorAll('.obstacle');
        obstacles.forEach(obstacle => {
            let obstaculoEsquerda = parseInt(obstacle.style.left);
            obstaculoEsquerda -= velocidadeJogo;
            obstacle.style.left = `${obstaculoEsquerda}px`;

            // Colisão com o jogador
            if (obstaculoEsquerda > 0 && obstaculoEsquerda < 60 && botaoDino < 25) {
                gameOver();
            }

            // Remoção de obstáculos fora da tela e atualização da pontuação
            if (obstaculoEsquerda < -60) {
                grid.removeChild(obstacle);
                pontos++;
                updateScore();
            }
        });

        requestAnimationFrame(gameLoop);
    }
    
function updateScore() {
    scoreElement.textContent = `Pontos: ${pontos}`;
    if (pontos > recorde) {
        recorde = pontos;
        localStorage.setItem('recorde', recorde);
        recordeElement.textContent = `Recorde: ${recorde}`;
    }
}

    setInterval(() => {
 if (!finalJogo) {
        dinoFrame = (dinoFrame + 1) % 3; // Agora são 3 imagens
        if (dinoFrame === 0) {
            dino.style.backgroundImage = "url('../assets/img/dino1.png')";
        } else if (dinoFrame === 1) {
            dino.style.backgroundImage = "url('../assets/img/dino2.png')";
        } else {
            dino.style.backgroundImage = "url('../assets/img/dino3.png')";
        }
    }
    }, 120);

    function createObstacle() {
        const obstacle = document.createElement('div');
        obstacle.classList.add('obstacle');
        obstacle.style.left = '900px';
        grid.appendChild(obstacle);
    }

    function updateScore() {
        scoreElement.textContent = `Pontos: ${pontos}`;
    }

function gameOver() {
    btnReiniciar.classList.add('btn-active')
    finalJogo = true;
    alert.textContent = 'Você perdeu!.';
    document.getElementById('desert').classList.add('desert-paused'); // Pausa o fundo
}

function restartGame() {
    document.getElementById('desert').classList.remove('desert-paused'); // Retoma o fundo
    location.reload();
}

    // Iniciar o jogo
    updateScore();
    gameLoop();
});

function startGame(){ 

  gameContainer.classList.add('game-started')
}
