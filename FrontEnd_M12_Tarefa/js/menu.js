// Abre e fecha o menu no celular: liga/desliga os modificadores --aberto
const botaoMenu = document.querySelector(".menu__botao");
const listaMenu = document.querySelector(".menu__lista");

botaoMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("menu__lista--aberto");
    botaoMenu.classList.toggle("menu__botao--aberto");
});
