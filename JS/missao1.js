let comando = document.querySelector(".comando");
const resposta = document.querySelector(".resposta");
const popup = document.querySelector(".ler-mais");
const tela = document.querySelector(".jogo");
const input = document.querySelector("#console-input")

const senhaChip = "MT1685PE0703-AUALZC47058D";

let etapa = 0;
let erros = 0;
let errosSenha = 0;
let hackeou = false;
let preparado = false;
let hospital = false;
let mulher = false;
let ganhou = false;

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
      tela.innerHTML = `
    <img class="msg-cont" src="../ASSETS/IMG/GIF/perdeu.gif">`;
      setTimeout(() => {
        location.href = "../index.html";
      }, 1000);
    }, 5000);
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
              <img src="../ASSETS/IMG/Implante Neon no Quarto Cyberpunk.png" alt="Chip conectado ao implante neural de A mulher">
              <p>[1] Tenta usar o leitor da mulher e cuidar para não danificar o leitor dela.<br> [2] Tenta hackear tudo sozinho usando um programa de suporte.</p>
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
        `;
      resposta.innerHTML = `Pressione Enter para avançar.`;
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
          <p>[1] Roubar o chip e ir para casa descobrir as informações do chip<br>[2] Fugir sem nada</p>
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
      let comando = document.querySelector(".senha");
      tela.innerHTML = `
          <p>O programa abre em modo isolado. Uma senha protege os arquivos. Procure a pista fora do jogo.</p>
          <img src="../ASSETS/IMG/GIF/descriptografia_chip.gif" alt="Programa esperando a senha do chip">
          `;
      setTimeout(() => {
        tela.innerHTML = `
        <p>O programa abre em modo isolado. Uma senha protege os arquivos. Procure a pista fora do jogo.</p>
        <img src="../ASSETS/IMG/senha_chip.png">
        <input class="senha" name="senha" autofocus autocomplete="off">
        `;
      }, 11000);
      input.innerHTML = ""
      etapa = "fim";
      break;

    case 99:
      if (!ganhou) {
        comando.disabled = true;
        tela.innerHTML = `
      <p class="erro">Sua escolha errada resultou na falha do sistema e consequentemente na sua morte!</p>
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
  }

  comando.value = "";
}

comando.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();

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
          tela.innerHTML = `<p class="erro">Dessa vez o sistema de segurança de dados do chip funcionou corretamente e apagou todos os arquivos</p>
              <img src="../ASSETS/IMG/GIF/caveira_rb_piscando.gif">`;
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
          etapa = 99;
          ganhou = true;
        } else {
          errosSenha++;
          comando.value = "";

          if (errosSenha === 2) {
            etapa = 99;
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
