const comando = document.querySelector(".comando");

const resposta = document.querySelector(".resposta");

const tela = document.querySelector(".jogo");

const escondido = document.querySelector(".ler-mais");

function scroll() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
}

let etapa = 0;

let tentativas = 0;

comando.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  event.preventDefault();

  if (comando.value === "") {
    escondido.innerHTML = "";

    switch (etapa) {
      case 0:
        tela.innerHTML = `
                    <p>Uma chamada anônima pisca na tela do seu computador.</p>

                    <img class="cena" src="../ASSETS/IMG/1.png">

                    <p>[0] Para atender</p>
                `;

        etapa = 1;

        break;

      case 2:
        tela.innerHTML = `
                    <p>É uma mulher aterrorizada. Ela descobriu alguma coisa</p>

                    <img class="cena" src="../ASSETS/IMG/2.png">

                    <p>[1] Correr para o local o mais rápido possível<br>
                    [2] Hackear e investigar ameaças no local</p>
                `;

        etapa = 3;

        break;

      case 4:
        tela.innerHTML = `
                    <p>Você chega ao beco.<br> A mulher está caída no chão.<br> Há fumaça saindo de sua cabeça.<br> Passos pesados ecoam em sua direção.</p>

                    <img class="cena" src="../ASSETS/IMG/2A.png">

                    <p>[1] Examinar a mulher e pegar o chip rapidamente<br>
                    [2] Esconder-se nas sombras</p>
                `;

        etapa = 5;

        break;

      case 6:
        tela.innerHTML = `
                    <p>Item coletado: Chip Dourado.<br> Os passos estão cada vez mais próximos.</p>

                    <img class="cena" src="../ASSETS/IMG/2A.1.png">

                    <p>[1] Correr<br>
                    [2] Andar como se nada tivesse acontecido</p>
                `;

        etapa = 7;

        break;

      case 8:
        tela.innerHTML = `
                    <p>Você escorrega e cai bem na frente dos guardas.<br> "Achou que ia escapar? A sorte não existe em Night City."<br> Eles apontam as armas para você.</p>

                    <img class="cena" src="../ASSETS/IMG/3A.png">

                    <p>[1] Reagir e lutar<br>
                    [2] Dar um chip falso</p>
                `;

        etapa = 9;

        break;

      case 10:
        tela.innerHTML = `
                    <p>Você tenta reagir.<br> Você era um detetive, não um lutador.<br> "Fim da linha para você, detetive."</p>

                    <img class="cena" src="../ASSETS/IMG/3A.1.png">

                    <h2>FINAL HUMILHANTE</h2>
                `;

        etapa = 99;

        break;

      case 11:
        tela.innerHTML = `
                    <p>Você entrega o chip falso ao guarda.<br> Ele começa a analisá-lo.</p>

                    <img class="cena" src="../ASSETS/IMG/3A.2.png">

                    <p>[1] Correr</p>
                `;

        etapa = 12;

        break;

      case 13:
        tela.innerHTML = `
                    <p>Funcionou.<br> Você corre pela chuva enquanto os guardas analisam o chip falso.<br> Hora de voltar para casa...</p>

                    <img class="cena" src="../ASSETS/IMG/3A.2_2.png">

                    <p>[1] Continuar</p>
                `;

        etapa = 14;

        break;

      case 15:
        tela.innerHTML = `
                    <p>Você entra em casa e tranca tudo.<br> Conecta o Chip Ícaro ao computador.<br> Um longo carregamento começa...</p>

                    <img class="cena" src="../ASSETS/IMG/3A.2_3.png">

                    <p>[1] Continuar</p>
                `;

        etapa = 16;

        break;

      case 17:
        tela.innerHTML = `
                    <p>A verdade, a realidade, o GLITCH está muito antes do presente.<br> Devo abrir o arquivo do Chip e testá-lo.</p>

                    <img class="cena" src="../ASSETS/IMG/3A.2_4.png">

                    <p>[1] Abrir o arquivo do Chip e usar a senha<br>
                    [2] Esquecer tudo e ir dormir</p>
                `;

        etapa = 18;

        break;

      case 19:
        tela.innerHTML = `
                    <p>Insira a senha correta.<br> Colocar a senha errada pode trazer consequências.</p>

                    <img class="cena" src="../ASSETS/IMG/3A.2_5.png">
                `;

        etapa = 20;

        break;
    }
  } else {
    switch (etapa) {
      case 1:
        if (comando.value === "0") {
          tela.innerHTML = `
                        <p>Você atende a chamada.</p>

                        <img class="cena" src="../ASSETS/IMG/1.png">
                    `;

          etapa = 2;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 3:
        if (comando.value === "1" || comando.value === "2") {
          tela.innerHTML = `
                        <p>Você segue para o local indicado.<br> O caminho é silencioso.</p>

                        <img class="cena" src="../ASSETS/IMG/2.png">
                    `;

          etapa = 4;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 5:
        if (comando.value === "1") {
          tela.innerHTML = `
                        <p>Você examina a mulher e pega o chip rapidamente.<br> Os MODERADORES estão chegando.</p>

                        <img class="cena" src="../ASSETS/IMG/2A.1.png">
                    `;

          etapa = 6;
        } else if (comando.value === "2") {
          tela.innerHTML = `
                        <p>Você se esconde nas sombras.<br> Os MODERADORES passam pelo local.<br> Quando se afastam, você pega o chip.</p>

                        <img class="cena" src="../ASSETS/IMG/2A.png">
                    `;

          etapa = 6;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 7:
        if (comando.value === "1" || comando.value === "2") {
          tela.innerHTML = `
                        <p>Você tenta sair do local.<br> Mas os MODERADORES já perceberam sua presença.</p>

                        <img class="cena" src="../ASSETS/IMG/3A.png">
                    `;

          etapa = 8;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 9:
        if (comando.value === "1") {
          tela.innerHTML = `
                        <p>Você se levanta e tenta lutar.</p>

                        <img class="cena" src="../ASSETS/IMG/3A.1.png">
                    `;

          etapa = 10;
        } else if (comando.value === "2") {
          tela.innerHTML = `
                        <p>Você tira um chip falso do bolso.</p>

                        <img class="cena" src="../ASSETS/IMG/3A.2.png">
                    `;

          etapa = 11;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 12:
        if (comando.value === "1") {
          tela.innerHTML = `
                        <p>Você corre pela chuva.<br> Os guardas continuam analisando o chip falso.</p>

                        <img class="cena" src="../ASSETS/IMG/3A.2_2.png">
                    `;

          etapa = 13;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 14:
        if (comando.value === "1") {
          tela.innerHTML = `
                        <p>Você volta para casa.</p>

                        <img class="cena" src="../ASSETS/IMG/3A.2_3.png">
                    `;

          etapa = 15;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 16:
        if (comando.value === "1") {
          tela.innerHTML = `
                        <p>O carregamento termina.</p>

                        <img class="cena" src="../ASSETS/IMG/3A.2_4.png">
                    `;

          etapa = 17;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 18:
        if (comando.value === "1") {
          tela.innerHTML = `
                        <p>Você decide abrir o arquivo.</p>

                        <img class="cena" src="../ASSETS/IMG/3A.2_5.png">
                    `;

          etapa = 19;
        } else if (comando.value === "2") {
          tela.innerHTML = `
                        <p>Pra que se importar, né?<br> Night City que se cuide!</p>

                        <img class="cena" src="../ASSETS/IMG/FINAL.png">

                        <h2>FINAL NEUTRO</h2>

                        <p>Cada um com seus problemas.</p>
                    `;

          etapa = 99;
        } else {
          resposta.innerHTML = `<p class="erro">Resposta inválida</p>`;
        }

        break;

      case 20:
        if (comando.value === "NET_DECK_2026") {
          tela.innerHTML = `
                        <h2>JOGO 2</h2>

                        <p>O código foi aceito.</p>

                        <img class="cena" src="../ASSETS/IMG/sucesso.png">
                    `;

          etapa = 99;
        } else {
          tentativas++;

          if (tentativas >= 2) {
            tela.innerHTML = `
                            <p>Senha incorreta.<br> Um barulho de helicópteros começa a se aproximar.</p>

                            <img class="cena" src="../ASSETS/IMG/FINAL.png">

                            <h2>FINAL</h2>
                        `;

            etapa = 99;
          } else {
            resposta.innerHTML = `
                            <p>Senha incorreta.<br> Tentativa ${tentativas}/2.</p>
                        `;
          }
        }

        break;
    }
  }

  comando.value = "";
});
