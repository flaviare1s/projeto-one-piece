/* OBJETIVO 1: Marcar o botão clicado como selecionado */
/* Passo 1: pegar os botões no JS para poder verificar quando o usuário clicar nele */

const botoes = document.querySelectorAll('.botao');
console.log(botoes);

/* Passo 2: Adicionar a classe .selecionado no botão clicado e Passo 3: Verificar se há algum botão selecionado e, se houver, remover a seleção */

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado"); //passo 3
        botaoSelecionado.classList.remove("selecionado"); //passo3
        botao.classList.add("selecionado"); //passo 2
    });
});



