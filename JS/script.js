const comando = document.querySelector('.comando');
const resposta = document.querySelector('.resposta');
const body = document.body;

function scroll() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

comando.addEventListener('keydown', (event) => {
    
    // Captura o clique da tecla Enter
    if (event.key === "Enter") {
        
        // Impede que a página recarregue acidentalmente
        event.preventDefault(); 
        
        // Executa a resposta baseada na opção digitada
        switch (comando.value) {
            case "1":
            comando.value = "";
            resposta.innerHTML += `<div class="certo">\nAbrindo Missão...</div><br>`;
            setTimeout(() => {
                body.value = "";
                body.style.backgroundColor = "white";
                document.querySelector('input').style.backgroundColor = "white";
                setTimeout(() => {
                    body.style.backgroundColor = "#000";
                    document.querySelector('input').style.backgroundColor = "#000";
                    location.href = "PAGES/missao1.html"
                }, 500)
            }, 1000)
            scroll()
            break;
            
            default:
            comando.value = "";
            resposta.innerHTML += `<div class="erro">\nOpção inválida!</div><br>`;
            scroll()
        }
    }
});
