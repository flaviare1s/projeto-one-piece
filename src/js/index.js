/* 
PASSO A PASSO:

OBJETIVO 1: 
Marcar o botão clicado como selecionado:
Passo 1.1: pegar os botões no JS para poder verificar quando o usuário clicar nele.
Passo 1.2: Adicionar a classe .selecionado no botão clicado. 
Passo 1.3: Verificar se há algum botão selecionado e, se houver, remover a seleção.

OBJETIVO 2: 
Mostrar as informações do personagem quando clicar no botão respectivo.
Passo 2.1: Pegar os personagens no JS para poder mostrar ou esconder.
Passo 2.2: Adicionar a classe .selecionado no personagem clicado.
Passo 3.2: Verificar se há alguma classe selecionada e, se houver, remover a seleção.
 */

const botoes = document.querySelectorAll(".botao"); //passo 1.1
console.log(botoes);

const personagens = document.querySelectorAll(".personagem"); //passo 2.1

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado"); //passo 1.3
        botaoSelecionado.classList.remove("selecionado"); //passo 1.3
        botao.classList.add("selecionado"); //passo 1.2

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado"); //passo 3.3

        personagens[indice].classList.add("selecionado"); //passo 2.2
    });
});






