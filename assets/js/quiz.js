 const quizData = [
      {
        pergunta: "Quem é o pai de Luke Skywalker?",
        respostas: ["Darth Vader", "Obi-Wan Kenobi", "Yoda", "Han Solo"],
        correta: "Darth Vader",
        imagem: "assets/img/Pergunta1.jpg",
      },
      {
        pergunta: "Qual planeta é a base da Estrela da Morte?",
        respostas: ["Yavin IV", "Alderaan", "Tatooine", "Endor"],
        correta: "Yavin IV",
        imagem: "assets/img/Pergunta2.jpg",
      },
      {
        pergunta: "Qual é a arma dos Jedi?",
        respostas: ["Blaster", "Sabre de luz", "Fuzil", "Arco"],
        correta: "Sabre de luz",
        imagem: "assets/img/Pergunta3.jpg",
      },
      {
        pergunta: "Qual personagem disse: 'Faça ou não faça. Tentativa não existe?'",
        respostas: ["Luke Skywalker", "Darth Vader", "Yoda", "Obi-Wan Kenobi"],
        correta: "Yoda",
        imagem: "assets/img/Pergunta4.jpg",
      },
      {
        pergunta: "Quem mata o Imperador Palpatine em 'O Retorno de Jedi'?",
        respostas: ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo"],
        correta: "Darth Vader",
        imagem: "assets/img/Pergunta5.jpg",
      },
    ];

    let perguntaAtual = 0;
    let pontuacao = 0;
    let nomeJogador = "";

    const telaInicial = document.getElementById("tela-inicial");
    const telaQuiz = document.getElementById("tela-quiz");
    const telaResultado = document.getElementById("tela-resultado");

    const botaoIniciar = document.getElementById("botao-iniciar");
    const inputNomeJogador = document.getElementById("nome-jogador");

    const perguntaEl = document.getElementById("pergunta");
    const respostasEl = document.getElementById("respostas");
    const botaoProxima = document.getElementById("botao-proxima");
    const imagemPergunta = document.getElementById("imagem-pergunta");

    const pontuacaoEl = document.getElementById("pontuacao");
    const mensagemEl = document.getElementById("mensagem");
    const linkAprender = document.getElementById("link-aprender");

    const certificadoCanvas = document.getElementById("certificado");
    const botaoGerarCertificado = document.getElementById("botao-gerar-certificado");

    botaoIniciar.addEventListener("click", () => {
      if (inputNomeJogador.value.trim() === "") {
        alert("Digite seu nome para começar!");
        return;
      }
      nomeJogador = inputNomeJogador.value.trim();
      perguntaAtual = 0;
      pontuacao = 0;
      telaInicial.style.display = "none";
      telaResultado.style.display = "none";
      certificadoCanvas.style.display = "none";
      botaoGerarCertificado.style.display = "none";
      linkAprender.style.display = "none";
      pontuacaoEl.style.display = "block";
      mensagemEl.style.display = "block";
      telaQuiz.style.display = "flex";
      carregarPergunta();
    });

    function carregarPergunta() {
      const atual = quizData[perguntaAtual];
      perguntaEl.textContent = atual.pergunta;
      imagemPergunta.src = atual.imagem;
      respostasEl.innerHTML = "";
      botaoProxima.style.display = "none";

      atual.respostas.forEach((resposta) => {
        const btn = document.createElement("button");
        btn.textContent = resposta;
        btn.addEventListener("click", () => selecionarResposta(resposta));
        respostasEl.appendChild(btn);
      });
    }

    function selecionarResposta(resposta) {
      const correta = quizData[perguntaAtual].correta;
      if (resposta === correta) pontuacao++;

      Array.from(respostasEl.children).forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === correta) {
          btn.style.backgroundColor = "#ff0000";
          btn.style.color = "#fff";
        } else {
          btn.style.backgroundColor = "#660000";
          btn.style.color = "#fff";
        }
      });

      botaoProxima.style.display = "block";
    }

    botaoProxima.addEventListener("click", () => {
      perguntaAtual++;
      if (perguntaAtual < quizData.length) {
        carregarPergunta();
      } else {
        mostrarResultado();
      }
    });

    function mostrarResultado() {
      telaQuiz.style.display = "none";
      telaResultado.style.display = "flex";

      pontuacaoEl.textContent = `${nomeJogador}, você acertou ${pontuacao} de ${quizData.length} perguntas!`;

      // Reset visibilidades
      botaoGerarCertificado.style.display = "none";
      certificadoCanvas.style.display = "none";
      linkAprender.style.display = "none";
      pontuacaoEl.style.display = "block";
      mensagemEl.style.display = "block";

      if (pontuacao === 5) {
        mensagemEl.textContent = `Incrível! Mestre Jedi ${nomeJogador}! 🌟 Clique em gerar certificado para salvar seu feito.`;
        botaoGerarCertificado.style.display = "inline-block";
      } else if (pontuacao >= 3 && pontuacao < 5) {
        mensagemEl.textContent = `Muito bom, ${nomeJogador}, mas precisou aprender mais!`;
        linkAprender.style.display = "inline-block";
      } else if (pontuacao >= 2 && pontuacao < 3) {
        mensagemEl.textContent = `Que tal aumentar seus conhecimentos sobre Star Wars e o Mundo da Ficção?!${nomeJogador}`;
        linkAprender.style.display = "inline-block";
      } else {
        mensagemEl.textContent = `Que tal aprender mais sobre Star Wars?! ${nomeJogador}. É interessante!`;
        linkAprender.style.display = "inline-block";
      }
    }

    botaoGerarCertificado.addEventListener("click", gerarCertificado);

    function gerarCertificado() {
      pontuacaoEl.style.display = "none";
      mensagemEl.style.display = "none";
      botaoGerarCertificado.style.display = "none";
      linkAprender.style.display = "none";

      certificadoCanvas.style.display = "block";
      certificadoCanvas.width = 900;
      certificadoCanvas.height = 600;

      const ctx = certificadoCanvas.getContext("2d");

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, certificadoCanvas.width, certificadoCanvas.height);

      ctx.strokeStyle = "#ff0000";
      ctx.lineWidth = 10;
      ctx.shadowColor = "#ff0000";
      ctx.shadowBlur = 20;
      ctx.strokeRect(20, 20, certificadoCanvas.width - 40, certificadoCanvas.height - 40);

      ctx.shadowColor = "transparent";
      ctx.fillStyle = "#ff0000";
      ctx.font = "bold 56px Orbitron, Arial, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("CERTIFICADO JEDI", certificadoCanvas.width / 2, 120);

      ctx.fillStyle = "#ff6666";
      ctx.font = "bold 40px Orbitron, Arial, sans-serif";
      ctx.fillText(nomeJogador.toUpperCase(), certificadoCanvas.width / 2, 200);

      ctx.fillStyle = "#fff";
      ctx.font = "24px Arial, sans-serif";
      const linhas = [
        "Demonstrou domínio da Força e sabedoria galáctica,",
        "conquistando todas as provas do Quiz Star Wars.",
        "Que a Força guie sempre seus passos na galáxia.",
      ];
      let y = 270;
      linhas.forEach((l) => {
        ctx.fillText(l, certificadoCanvas.width / 2, y);
        y += 36;
      });

      const data = new Date();
      const opcoes = { day: "2-digit", month: "2-digit", year: "numeric" };
      const dataBR = data.toLocaleDateString("pt-BR", opcoes);
      ctx.fillStyle = "#aaa";
      ctx.font = "20px Arial, sans-serif";
      ctx.fillText(`Emitido em ${dataBR}`, certificadoCanvas.width / 2, 370);

      ctx.fillStyle = "#ff0000";
      ctx.font = "22px Orbitron, Arial, sans-serif";
      ctx.fillText("— Conselho Jedi —", certificadoCanvas.width / 2, 420);

      // Criar ou atualizar o botão de download imediatamente
      let botaoBaixar = document.getElementById("botao-baixar-certificado");
      if (!botaoBaixar) {
        botaoBaixar = document.createElement("a");
        botaoBaixar.id = "botao-baixar-certificado";
        botaoBaixar.className = "botao-baixar";
        botaoBaixar.textContent = "Baixar Certificado";
        certificadoCanvas.parentNode.appendChild(botaoBaixar);
      }
      botaoBaixar.href = certificadoCanvas.toDataURL("image/png");
      botaoBaixar.download = `certificado-jedi-${nomeJogador.replace(/\s+/g, "-").toLowerCase()}.png`;
      botaoBaixar.style.display = "inline-block";
}

      