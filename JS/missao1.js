const comando = document.querySelector(".comando");
const resposta = document.querySelector(".resposta");
const popup = document.querySelector(".ler-mais");
const tela = document.querySelector(".jogo");
const input = document.querySelector("#console-input");
const local = document.querySelector("#local");
const tudo = document.querySelector("#content");
const final = document.querySelector("#final");

const senhaChip = "MT1685PE0703-AUALZC47058D";

let etapa = 0;
let erros = 0;
let errosSenha = 0;
let hackeou = false;
let preparado = false;
let hospital = false;
let mulher = false;
let ganhou = false;
let bloqueiaEnterFinal = false;

function eliminado() {
  tela.innerHTML = `
    <img class="msg-cont" src="../ASSETS/IMG/GIF/perdeu.gif">`;
  location.href = "../index.html";
}

function erroDeOpcao() {
  erros++;

  if (erros === 3) {
    tela.innerHTML = `
            <p>Três opções inválidas. O terminal encerra a sessão.</p>
            <img src="../ASSETS/IMG/Rendido pelos guardas.png" alt="O protagonista é capturado">
            <h2>FIM DE JOGO</h2>
            `;
    setTimeout(() => {
      document.body.innerHTML = `
    <img class="msg-cont" src="../ASSETS/IMG/GIF/perdeu.gif">`;
      setTimeout(() => {
        location.href = "../index.html";
      }, 1000);
    }, 2200);
  } else {
    resposta.textContent = `Opção inválida. Tentativa ${erros}/3.`;
  }
}

function mostrarProximaTela() {
  if (hospital) {
    switch (etapa) {
      case 28:
        tela.innerHTML = `
                <p>Você atravessa a cidade até o hospital.</p>
                <img src="../ASSETS/IMG/2 - Recepção.png" alt="Entrada do hospital clandestino">
                <p>Pressione Enter para avançar.</p>
                `;
        etapa = 29;
        break;

      case 29:
        tela.innerHTML = `
                  <p>A equipe a coloca na maca e liga os monitores. Um dos médicos encontra atividade neural, mas ela está fraca.</p>
                  <img src="../ASSETS/IMG/3- Mulher na maca.png" alt="A mulher sobre uma maca">
                  <p>Pressione Enter para avançar.</p>
                  `;
        etapa = 30;
        break;

      case 30:
        tela.innerHTML = `
          <p>O tratamento começa. Luzes percorrem o implante e os sinais vitais se estabilizam, um pulso de cada vez.</p>
          <img src="../ASSETS/IMG/3- Mulher na maca.png" alt="A mulher recebendo tratamento">
          <p>Pressione Enter para avançar.</p>
          `;
        etapa = 31;
        break;

      case 31:
        tela.innerHTML = `
            <p>Ao amanhecer, a mulher acorda, vocês deixam o hospital e seguem para sua casa. <br> No caminho ela diz que o implante causou o dano no seu leitor neural e por isso não pôde ler os arquivos.</p>
            <img src="../ASSETS/IMG/Fuga Neon de Manha.png" alt="A mulher recuperada no hospital">
            <p>Pressione Enter para avançar.</p>
            `;
        etapa = 32;
        break;

      case 32:
        tela.innerHTML = `
              <p>Em casa, você...</p>
              <img src="../ASSETS/IMG/Confronto Neon no Quarto Cyberpunk.png" alt="Chip conectado ao implante neural de A mulher">
              <p>[1] Tenta usar o leitor da mulher e cuidar para não machucá-la.<br> [2] Tenta hackear tudo sozinho usando um programa de suporte.</p>
              `;
        hospital = false;
        etapa = 26;
        break;
    }
    comando.value = "";
    return;
  }

  switch (etapa) {
    case 0:
      popup.innerHTML = "";
      tela.innerHTML = `
              <p>Um telefone descartável vibra sobre a mesa. Lá fora, o neon de Kabuki sangra na chuva. Uma chamada sem origem pisca no visor.</p>
              <img src="../ASSETS/IMG/1-Chamado Neon no Escritório Noir.png" alt="Telefone tocando num escritório iluminado por neon">
              <p>[0] Atender</p>
              `;
      etapa = 1;
      break;

    case 2:
      tela.innerHTML = `
                <p>Uma mulher aterrorizada explica que encontrou informações privilegiadas num chip e precisa escapar. Ela marca um beco atrás do Clube Kabuki.</p>
                <img src="../ASSETS/IMG/2-Chamada Anônima no Clube Kabuki.png" alt="Mulher numa chamada anônima">
                <p>[1] Ir diretamente ao local<br>[2] Hackear e mapear o local antes de ir</p>
                `;
      etapa = 3;
      break;

    case 4:
      tela.innerHTML = `<p>Você acessou o terminal do seu computador:</p> <br>
                  <img src="../ASSETS/IMG/GIF/terminal_arasakaos.gif">`;

      setTimeout(() => {
        tela.innerHTML = `<p>Você acessou o terminal do seu computador</p>
                    <img src="../ASSETS/IMG/hack_loc.png">
                    [1] Ir preparado<br>[2] Ir logo`;
      }, 15000);

      etapa = 5;
      break;

    case 6:
      if (hackeou) {
        tela.innerHTML = `
            <p>Você chega ao beco mapeado. A mulher está caída no chão. Passos de guardas se aproximam.</p>
            <img src="../ASSETS/IMG/Mulher no chão.jpg" alt="Mulher caída num beco neon">
            <p>[1] Esconder-se dos guardas<br>[2] Examinar a mulher</p>
          `;
      } else {
        tela.innerHTML = `
            <p>Você vai direto ao beco. A mulher está caída no chão. Passos pesados se aproximam pela chuva.</p>
            <img src="../ASSETS/IMG/Mulher no chão.jpg" alt="Mulher caída no chão do beco">
            <p>[1] Esconder-se dos guardas<br>[2] Examinar a mulher</p>
          `;
      }
      etapa = 7;
      break;

    case 8:
      tela.innerHTML = `
          <p>Você se esconde. Os guardas chegam e olham a mulher caída.<p>
          <img src="../ASSETS/IMG/Guardas aparecem.png" alt="Guardas encontram a mulher caída">
          <p>[1] Surpreender os guardas e pegar o chip<br>[2] Esperar</p>
        `;
      etapa = 9;
      break;

    case 10:
      tela.innerHTML = `
          <p>Você examina a mulher e encontra o chip. Os guardas estão perto.</p>
          <img src="../ASSETS/IMG/Mão Cibernética Sob Chuva Neon.png" alt="Mão segurando o chip">
          <p>[1] Sair disfarçadamente<br>[2] Sair correndo</p>
        `;
      etapa = 11;
      break;

    case 12:
      tela.innerHTML = `
          <p>Os guardas encontram o chip . A mulher parece estar viva.</p>
          <img src="../ASSETS/IMG/Guardas pegam o chip da mulher.png" alt="Guarda pegando o chip">
          <p>[1] Surpreendê-los e recuperar o chip<br>[2] Continuar escondido</p>
        `;
      etapa = 13;
      break;

    case 14:
      tela.innerHTML = `
          <p>Os guardas acreditaram, eles examinam a mulher, mas não encontram nada.</p>
          <img src="../ASSETS/IMG/2- Passando desapercebido.png" alt="Protagonista passando pelos guardas sem ser visto">
          <p>Pressione Enter para avançar.</p>`;
      etapa = 15;
      break;

    case 16:
      tela.innerHTML = `
          <p>Você corre pela chuva. Os guardas o alcançam e apontam as armas.</p>
          <img src="../ASSETS/IMG/2-Corre na Chuva Neon.png" alt="Protagonista perseguido na chuva">
          <p>[1] Reagir rapidamente<br>[2] Entregar um chip falso e fugir</p>
        `;
      etapa = 17;
      break;

    case 18:
      tela.innerHTML = `
          <p>Você entrega o chip falso. O guarda começa a analisá-lo sem perceber a troca.</p>
          <img src="../ASSETS/IMG/1-Entrega do Chip na Chuva Neon.png" alt="Protagonista entregando um chip ao guarda">
          <p>[1] Fugir antes que percebam</p>
        `;
      etapa = 19;
      break;

    case 20:
      tela.innerHTML = `
          <p>Você escapa enquanto os guardas analisam a cópia. O chip verdadeiro continua com você. Você corre antes que percebam. O que você faz agora?</p>
          <img src="../ASSETS/IMG/1- Aos Pés do Neon Kabuki.png" alt="Protagonista escapando por Kabuki">
          <p>[1] Ir para casa descobrir as informações do chip<br>[2] Levar a mulher ao hospital</p>
        `;
      etapa = 23;
      break;

    case 21:
      tela.innerHTML = `
          <p>Os guardas estavam analisando o chip, você pegou os guardas de surpresa e derrubou eles</p>
          <img src="../ASSETS/IMG/Tiroteio com Drones.png" alt="Protagonista escapando por Kabuki">
          <p>[1] Roubar o chip e ir para casa descobrir as informações do chip<br>[2] Pegar o chip e fugir com a mulher para salvar a vida dela</p>
          `;
      etapa = 23;
      break;

    case 22:
      tela.innerHTML = `
          <p>Você recupera o chip. A mulher ainda está no beco e precisa de ajuda.</p>
          <img src="../ASSETS/IMG/Tiroteio com Drones.png" alt="Tiroteio com drones">
          <p>[1] Ir para casa descobrir as informações do chip<br>[2] Levar a mulher ao hospital</p>
        `;
      etapa = 23;
      break;

    case 24:
      tela.innerHTML = `
          <p>Você tranca a porta e...</p>
          <img src="../ASSETS/IMG/2- Entrando em casa com o chip.png" alt="Chip conectado ao computador em casa">
          <p>[1] Examina o código do chip, afinal você não tem tempo, os guardas podem chegar a qualquer momento.<br>[2] Vai dormir e resolver amanhã, afinal você está muito cansado e precisa de foco para não errar nenhum detalhe ao examinar o chip</p>
        `;
      etapa = 25;
      break;

    case 27:
    case 27:
      bloqueiaEnterFinal = true;
      comando.disabled = true;

      tela.innerHTML = `
    <p>O programa abre em modo isolado. Uma senha protege os arquivos. Procure a pista fora do jogo.</p>
    <img src="../ASSETS/IMG/GIF/descriptografia_chip.gif" alt="Programa esperando a senha do chip">
  `;

      local.remove();

      setTimeout(() => {
        bloqueiaEnterFinal = false;
        tela.innerHTML = `
      <p>O programa abre em modo isolado. Uma senha protege os arquivos. Procure a pista fora do jogo.</p>
      <img src="../ASSETS/IMG/senha_chip.png">
    `;
        comando.classList.add("senha");
        comando.disabled = false;
        comando.focus();
      }, 11000);

      etapa = "fim";
      break;

    case 99:
      if (!ganhou) {
        comando.disabled = true;
        tela.innerHTML = `
      <p class="erro">Suas ações resultaram na falha do sistema e consequentemente na sua morte!</p>
      `;

        setTimeout(() => {
          document.body.innerHTML = `
      <img class="msg-cont" src="../ASSETS/IMG/GIF/perdeu.gif" alt="Fim de jogo">
      `;

          document.querySelector(".msg-cont").scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });

          setTimeout(() => {
            location.href = "../index.html";
          }, 1000);
        }, 3000);
      }

      break;

    case 100:
      bloqueiaEnterFinal = true;
      tudo.innerHTML = "";
      comando.classList.add("invisivel");
      final.innerHTML = `<img src="../ASSETS/IMG/GIF/caveira_falante.gif">`;
      setTimeout(() => {
        final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/GIF/dialogo_final_01.gif">`;
        setTimeout(() => {
          bloqueiaEnterFinal = false;
          final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/dialogo_final_01.png">
          <p>Pressione Enter para continuar.</p>`;
          etapa = 101;
        }, 3770);
      }, 15500);
      break;

    case 101:
      bloqueiaEnterFinal = true;
      final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/GIF/dialogo_final_02.gif">`;
      setTimeout(() => {
        bloqueiaEnterFinal = false;
        final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/dialogo_final_02.png">
        <p>Pressione Enter para continuar.</p>`;
        etapa = 102;
      }, 3970);
      break;

    case 102:
      bloqueiaEnterFinal = true;
      final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/GIF/dialogo_final_03.gif">`;
      setTimeout(() => {
        bloqueiaEnterFinal = false;
        final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/dialogo_final_03.png">
        <p>Pressione Enter para continuar.</p>`;
        etapa = 103;
      }, 3970);
      break;

    case 103:
      bloqueiaEnterFinal = true;
      final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/GIF/dialogo_final_04.gif">`;
      setTimeout(() => {
        bloqueiaEnterFinal = false;
        final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/dialogo_final_04.png">
        <p>Pressione Enter para continuar.</p>`;
        etapa = 104;
      }, 3920);
      break;

    case 104:
      bloqueiaEnterFinal = true;
      final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/GIF/dialogo_final_05.gif">`;
      setTimeout(() => {
        bloqueiaEnterFinal = false;
        final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/dialogo_final_05.png">
        <p>Pressione Enter para continuar.</p>`;
        etapa = 105;
      }, 3970);
      break;

    case 105:
      bloqueiaEnterFinal = true;
      final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/GIF/dialogo_final_06.gif">`;
      setTimeout(() => {
        bloqueiaEnterFinal = false;
        final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/dialogo_final_06.png">
        <p>Pressione Enter para continuar.</p>`;
        etapa = 106;
      }, 3970);
      break;

    case 106:
      bloqueiaEnterFinal = true;
      final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/GIF/dialogo_final_07.gif">`;
      setTimeout(() => {
        bloqueiaEnterFinal = false;
        final.innerHTML = `<img class="msg-cont" src="../ASSETS/IMG/dialogo_final_07.png">
        <p>Pressione Enter para continuar.</p>`;
        etapa = 107;
      }, 3490);
      break;

    case 107:
      bloqueiaEnterFinal = true;
      final.innerHTML = `<img src="../ASSETS/IMG/GIF/caveira_piscando.gif">`;
      setTimeout(() => {
        location.href = "../index.html";
      }, 8900);
  }

  comando.value = "";
}

document.addEventListener(
  "keydown",
  (event) => {
    if (event.key !== "Enter") return;

    // O diálogo final é controlado pelo listener do documento,
    // inclusive quando o campo está invisível ou sem foco.
    if (etapa >= 100 && etapa <= 107) {
      event.preventDefault();
      event.stopPropagation();

      // Aguarda a animação terminar. A etapa 107 encerra automaticamente.
      if (bloqueiaEnterFinal) return;

      mostrarProximaTela();
      return;
    }

    // Nas outras etapas, deixa o campo processar as escolhas.
    if (event.target === comando) return;

    event.preventDefault();
    event.stopPropagation();

    if (bloqueiaEnterFinal) return;

    comando.value = "";
    mostrarProximaTela();
  },
  true,
);

comando.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  if (etapa >= 100 && etapa <= 107 && bloqueiaEnterFinal) {
    comando.value = "";
    return;
  }

  const escolha = comando.value.trim();
  const etapaAntesDaEscolha = etapa;
  resposta.textContent = "";

  // No hospital, Enter avança uma tela por vez.
  if (hospital) {
    if (escolha !== "") {
      tela.innerHTML += "<p>Pressione Enter para avançar.</p>";
      comando.value = "";
      return;
    }

    mostrarProximaTela();
    return;
  }

  // Mostra uma cena quando a etapa é par; etapas ímpares recebem escolhas.
  if (escolha === "" && etapa % 2 === 0) {
    mostrarProximaTela();
  } else {
    switch (etapa) {
      case 1:
        if (escolha === "0") {
          erros = 0;
          etapa = 2;
        } else {
          erroDeOpcao();
        }
        break;

      case 3:
        if (escolha === "1") {
          erros = 0;
          preparado = false;
          etapa = 6;
        } else if (escolha === "2") {
          erros = 0;
          hackeou = true;
          etapa = 4;
        } else {
          erroDeOpcao();
        }
        break;

      case 5:
        if (escolha === "1" || escolha === "2") {
          erros = 0;
          preparado = escolha === "1";
          etapa = 6;
        } else {
          erroDeOpcao();
        }
        break;

      case 7:
        if (escolha === "1") {
          erros = 0;
          etapa = 8;
        } else if (escolha === "2") {
          erros = 0;
          etapa = 10;
        } else {
          erroDeOpcao();
        }
        break;

      case 9:
        if (escolha === "2") {
          erros = 0;
          etapa = 12;
        } else if (escolha === "1") {
          erros = 0;
          if (preparado) {
            etapa = 22;
          } else {
            etapa = 99;
          }
        } else {
          erroDeOpcao();
        }
        break;

      case 11:
        if (escolha === "1") {
          erros = 0;
          etapa = 14;
        } else if (escolha === "2") {
          erros = 0;
          etapa = 16;
        } else {
          erroDeOpcao();
        }
        break;

      case 13:
        if (escolha === "1" && preparado) {
          erros = 0;
          etapa = 21;
        } else if (escolha === "1" || escolha === "2") {
          erros = 0;
          etapa = 99;
        } else {
          erroDeOpcao();
        }
        break;

      case 15:
        tela.innerHTML = `
          <p>Eles foram embora. O chip verdadeiro continua com você.</p>
          <img src="../ASSETS/IMG/1- Aos Pés do Neon Kabuki.png" alt="Protagonista passando pelos guardas sem ser visto">
          <p>[1] Ir para casa examinar o chip<br>[2] Levar a mulher ao hospital</p>
        `;
        etapa = 23;
        break;
      case 23:
        if (escolha === "1") {
          erros = 0;
          etapa = 24;
        } else if (escolha === "2") {
          erros = 0;
          hospital = true;
          etapa = 28;
        } else {
          erroDeOpcao();
        }
        break;

      case 17:
        if (escolha === "1") {
          erros = 0;
          if (preparado) {
            etapa = 22;
          } else {
            etapa = 99;
          }
        } else if (escolha === "2") {
          erros = 0;
          etapa = 18;
        } else {
          erroDeOpcao();
        }
        break;
      case 26:
        if (escolha === "1") {
          document.body.innerHTML = `
              <img src="../ASSETS/IMG/GIF/caveira_rb_piscando.gif">`;
          setTimeout(() => {
            document.body.innerHTML = `
      <img class="msg-cont" src="../ASSETS/IMG/GIF/perdeu.gif" alt="Fim de jogo">
      `;
            setTimeout(() => {
              location.href = "../index.html";
            }, 1000);
          }, 7500);
          comando.disabled = true;
        } else if (escolha === "2") {
          etapa = 27;
        } else {
          erroDeOpcao();
        }
        break;
      case 19:
        if (escolha === "1") {
          erros = 0;
          etapa = 20;
        } else {
          erroDeOpcao();
        }
        break;

      case 25:
        if (escolha === "1") {
          erros = 0;
          etapa = 27;
        } else if (escolha === "2") {
          erros = 0;
          etapa = 99;
        } else {
          erroDeOpcao();
        }
        break;

      case "fim":
        if (escolha.toUpperCase() === senhaChip) {
          etapa = 100;
          ganhou = true;
          mostrarProximaTela();
        } else {
          errosSenha++;
          comando.value = "";
          comando.classList.remove("senha");
          comando.classList.add("erroSenha");

          if (errosSenha >= 2) {
            etapa = 99;
            mostrarProximaTela(); // Executa o case 99
          } else {
            resposta.textContent =
              "Senha incorreta. Você tem mais uma tentativa.";
          }
        }

        comando.value = "";
        return;
    }
  }

  comando.value = "";

  // Uma escolha válida já mostra a cena seguinte.
  if (escolha !== "" && etapa !== etapaAntesDaEscolha && !comando.disabled) {
    mostrarProximaTela();
  }
});
