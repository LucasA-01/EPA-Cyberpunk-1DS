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
          <p>Você atravessa a cidade até o hospital clandestino. A chuva risca o para-brisa enquanto Yara luta para continuar respirando.</p>
          <img src="../ASSETS/IMG/2 - Recepção.png" alt="Entrada do hospital clandestino">
          <p>Pressione Enter para avançar.</p>
        `;
        etapa = 29;
        break;

      case 29:
        tela.innerHTML = `
          <p>A equipe a coloca na maca e liga os monitores. Um dos médicos encontra atividade neural, mas ela está fraca.</p>
          <img src="../ASSETS/IMG/3- Mulher na maca.png" alt="Yara sobre uma maca">
          <p>Pressione Enter para avançar.</p>
        `;
        etapa = 30;
        break;

      case 30:
        tela.innerHTML = `
          <p>O tratamento começa. Luzes percorrem o implante e os sinais vitais se estabilizam, um pulso de cada vez.</p>
          <img src="../ASSETS/IMG/3- Mulher na maca.png" alt="Yara recebendo tratamento">
          <p>Pressione Enter para avançar.</p>
        `;
        etapa = 31;
        break;

      case 31:
        tela.innerHTML = `
          <p>Ao amanhecer, Yara acorda, vocês deixam o hospital e seguem para sua casa.</p>
          <img src="../ASSETS/IMG/Fuga Neon de Manha.png" alt="Yara recuperada no hospital">
          <p>Pressione Enter para avançar.</p>
        `;
        etapa = 32;
        break;

      case 32:
        tela.innerHTML = `
          <p>Em casa, você conecta o chip ao implante na cabeça de Yara. O programa pede a senha externa.</p>
          <img src="../ASSETS/IMG/Implante Neon no Quarto Cyberpunk.png" alt="Chip conectado ao implante neural de Yara">
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
      tela.innerHTML = `
          <p>O mapa mostra as patrulhas e um ponto cego. Você decide o que levar.</p>
          <img src="../ASSETS/IMG/1-Hackeia chip e loading.png" alt="Mapa sendo preparado num computador">
          <p>[1] Ir armado<br>[2] Ir desarmado</p>
        `;
      etapa = 5;
      break;

    case 6:
      if (hackeou) {
        tela.innerHTML = `
            <p>Você chega ao beco mapeado. A mulher está caída no chão. Passos de guardas se aproximam.</p>
            <img src="../ASSETS/IMG/1-Mulher Inconsciente no Beco Neon (com as mãos nela).png" alt="Mulher caída num beco neon">
            <p>[1] Esconder-se dos guardas<br>[2] Examinar a mulher</p>
          `;
      } else {
        tela.innerHTML = `
            <p>Você vai direto ao beco. A mulher está caída no chão. Passos pesados se aproximam pela chuva.</p>
            <img src="../ASSETS/IMG/1-Mulher Inconsciente no Beco Neon (com as mãos nela).png" alt="Mulher caída no chão do beco">
            <p>[1] Esconder-se dos guardas<br>[2] Examinar a mulher</p>
          `;
      }
      etapa = 7;
      break;

    case 8:
      tela.innerHTML = `
          <p>Você se esconde. Os guardas chegam e começam a examinar a mulher. Um deles procura o chip.</p>
          <img src="../ASSETS/IMG/Confronto Neon no Beco Chuvoso (1).png" alt="Guardas examinando a mulher caída">
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
          <p>Os guardas encontram o chip e vão embora com ele. A mulher ainda respira.</p>
          <img src="../ASSETS/IMG/Guardas pegam o chip da mulher.png" alt="Guarda pegando o chip">
          <p>[1] Surpreendê-los e recuperar o chip<br>[2] Continuar escondido</p>
        `;
      etapa = 13;
      break;

    case 14:
      tela.innerHTML = `
          <p>Você sai sem chamar atenção. Os guardas examinam a mulher, mas não encontram nada. O chip verdadeiro continua com você.</p>
          <img src="../ASSETS/IMG/2- Passando desapercebido.png" alt="Protagonista passando pelos guardas sem ser visto">
          <p>[1] Ir para casa examinar o chip<br>[2] Levar a mulher ao hospital</p>
        `;
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
          <p>Você escapa enquanto os guardas analisam a cópia. O chip verdadeiro continua com você.</p>
          <img src="../ASSETS/IMG/1- Aos Pés do Neon Kabuki.png" alt="Protagonista escapando por Kabuki">
          <p>[1] Ir para casa descobrir as informações do chip<br>[2] Levar a mulher ao hospital</p>
        `;
      etapa = 21;
      break;

    case 22:
      tela.innerHTML = `
          <p>Você recupera o chip. Yara ainda está no beco e precisa de ajuda.</p>
          <img src="../ASSETS/IMG/Mão Cibernética Sob Chuva Neon.png" alt="Mão segurando o chip recuperado">
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
        "A senha é aceita. O programa revela Night City em 2124, sob arranha-céus submersos. Uma assinatura neural de Yara surge no mapa. Uma voz atravessa o terminal: ‘Se chegou até aqui, o futuro já nos encontrou.’",
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
          hackeou = false;
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
        if (escolha === "1") {
          erros = 0;
          etapa = 22;
        } else if (escolha === "2") {
          erros = 0;
          etapa = 12;
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
        if (escolha === "1") {
          erros = 0;
          etapa = 22;
        } else if (escolha === "2") {
          erros = 0;
          finalizar(
            "FINAL DE ABANDONO",
            "Você continua escondido enquanto os guardas levam Yara e o chip. A chuva apaga as pegadas. O beco fica vazio.",
            "Escondido nas sombras.png",
          );
        } else {
          erroDeOpcao();
        }
        break;

      case 15:
      case 21:
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
          if (hackeou && armado) {
            etapa = 22;
          } else {
            finalizar(
              "DERROTA // OS GUARDAS VENCERAM",
              "Você reage, mas sem o mapa e a arma — ou sem um deles — os guardas o derrubam antes da fuga.",
              "Rendido pelos guardas.png",
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
            "FINAL ALTERNATIVO // A NOITE ADIADA",
            "Você vai dormir. Durante a noite, o chip aquece e projeta uma coordenada no escuro. Um veículo para sob a janela. Ao amanhecer, os arquivos continuam fechados — e alguém já conhece sua localização.",
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
