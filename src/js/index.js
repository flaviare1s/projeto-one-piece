/* OBJETIVO 1: Marcar o botão clicado como selecionado */
/* Passo 1: pegar os botões no JS para poder verificar quando o usuário clicar nele */

const botoes = document.querySelectorAll('.botao');
console.log(botoes);

/* Passo 2: Adicionar a classe .selecionado no botão clicado */

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        botao.classList.add("selecionado");
    });
});


