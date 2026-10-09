const comando = document.querySelector(".comando");
const resposta = document.querySelector(".resposta");
const popup = document.querySelector(".ler-mais");
const tela = document.querySelector(".jogo");

const senhaChip = "MT1685PE0703-AUALZC47058D";

let etapa = 0;
let erros = 0;
let errosSenha = 0;
let hackeou = false;
let armado = false;
let hospital = false;

function erroDeOpcao() {
  erros++;

  if (erros === 3) {
    tela.innerHTML = `
            <p>Três opções inválidas. O terminal encerra a sessão.</p>
            <img src="../ASSETS/IMG/Rendido pelos guardas.png" alt="O protagonista é capturado">
            <h2>FIM DE JOGO</h2>
            `;
    comando.disabled = true;
  } else {
    resposta.textContent = `Opção inválida. Tentativa ${erros}/3.`;
  }
}

function finalizar(titulo, texto, imagem) {
  tela.innerHTML = `
          <p>${texto}</p>
          <img src="../ASSETS/IMG/${imagem}" alt="Imagem do final">
          <h2>${titulo}</h2>
          `;
  etapa = 99;
  comando.disabled = true;
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
            <p>Ao amanhecer, a mulher acorda, vocês deixam o hospital e seguem para sua casa. <br> No caminho ela diz que seu nome é Yara</p>
            <img src="../ASSETS/IMG/Fuga Neon de Manha.png" alt="A mulher recuperada no hospital">
            <p>Pressione Enter para avançar.</p>
            `;
        etapa = 32;
        break;

      case 32:
        tela.innerHTML = `
              <p>Em casa, você conecta o chip ao implante na cabeça da Yara. O programa pede a senha externa.</p>
              <img src="../ASSETS/IMG/Implante Neon no Quarto Cyberpunk.png" alt="Chip conectado ao implante neural de A mulher">
              <p>Digite a senha externa e pressione Enter.</p>
              `;
        hospital = false;
        etapa = 27;
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
                    [1] Ir preparado<br>[2] Ir logo`
                  }, 15000)

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
          <img src="../ASSETS/IMG/Mulher no chão.jpg" alt="Mulher no chão">
          <p>[1] Ir para casa descobrir as informações do chip<br>[2] Levar a mulher ao hospital</p>
        `;
      etapa = 23;
      break;

    case 24:
      tela.innerHTML = `
          <p>Você tranca a porta e liga o leitor neural. O programa reconhece o chip, mas não abre os arquivos sozinho.</p>
          <img src="../ASSETS/IMG/2- Entrando em casa com o chip.png" alt="Chip conectado ao computador em casa">
          <p>[1] Examinar o código do chip<br>[2] Ir dormir</p>
        `;
      etapa = 25;
      break;

    case 26:
      tela.innerHTML = `
          <p>O programa abre em modo isolado. Uma senha protege os arquivos. Procure a pista fora do jogo.</p>
          <img src="../ASSETS/IMG/INPUT DA SENHA.png" alt="Programa esperando a senha do chip">
          <p>Digite a senha externa e pressione Enter.</p>
        `;
      etapa = 27;
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
      resposta.textContent = "Pressione Enter para avançar.";
      comando.value = "";
      return;
    }

    mostrarProximaTela();
    return;
  }

  // Senha do chip: duas tentativas erradas encerram o jogo.
  if (etapa === 27) {
    if (escolha.toUpperCase() === senhaChip) {
      finalizar(
        "FASE 2 // SINAL LOCALIZADO",
        "A senha é aceita. O programa revela Night City em 2077, sob arranha-céus submersos. Uma assinatura neural de A mulher surge no mapa. Uma voz atravessa o terminal: ‘Se chegou até aqui, o futuro já nos encontrou.’",
        "Infiltração Neon no Corredor 307.png",
      );
    } else {
      errosSenha++;
      comando.value = "";

      if (errosSenha === 2) {
        finalizar(
          "DERROTA // LOCALIZAÇÃO COMPARTILHADA",
          "A segunda senha incorreta fecha o programa. Sua localização é enviada à corporação.",
          "Senha incorreta.png",
        );
      } else {
        resposta.textContent = "Senha incorreta. Você tem mais uma tentativa.";
      }
    }

    comando.value = "";
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
          armado = false;
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
          armado = escolha === "1";
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
          if (armado) {
            etapa = 22;
          } else {
            finalizar(
              "DERROTA // OS GUARDAS VENCERAM",
              "Você reage, mas sem preparo os guardas o derrubam antes da fuga.",
              "Fuga Neon sob Chuva e Pixel.png",
            );
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
        if (escolha === "2") {
          erros = 0;
          finalizar(
            "DERROTA // FINAL DE ABANDONO",
            "Você continua escondido enquanto os guardas levam A mulher e o chip. A chuva apaga as pegadas. O beco fica vazio.",
            "Escondido nas sombras.png",
          );}
        else if (escolha === "1" && armado) {
            erros = 0;
            etapa = 21;
          }
          else if (escolha === "1"){
            erros = 0
              finalizar(
                "DERROTA // OS GUARDAS VENCERAM",
                "Você reage, mas sem preparo os guardas o derrubam antes da fuga.",
                "Fuga Neon sob Chuva e Pixel.png",
              );
            }
        else {
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
          if (armado) {
            etapa = 22;
          } else {
            finalizar(
              "DERROTA // OS GUARDAS VENCERAM",
              "Você reage, mas sem preparo os guardas o derrubam antes da fuga.",
              "Fuga Neon sob Chuva e Pixel.png",
            );
          }
        } else if (escolha === "2") {
          erros = 0;
          etapa = 18;
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
          etapa = 26;
        } else if (escolha === "2") {
          erros = 0;
          finalizar(
            "DERROTA // FINAL ALTERNATIVO // A NOITE ADIADA",
            "Você vai dormir. Durante a noite, o chip aquece e projeta uma coordenada no escuro. Um veículo para sob a janela. Ao amanhecer, os arquivos continuam fechados e você é preso e morto na cadeia por um dos guardas, você matou o irmão mais novo dele naquela noite... O sistema não é justo.",
            "Esquecer e ir dormir.png",
          );
        } else {
          erroDeOpcao();
        }
        break;
    }
  }

  comando.value = "";

  // Uma escolha válida já mostra a cena seguinte.
  if (escolha !== "" && etapa !== etapaAntesDaEscolha && !comando.disabled) {
    mostrarProximaTela();
  }
});
