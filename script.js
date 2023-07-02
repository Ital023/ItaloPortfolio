var botaoMenu = document.querySelector(".cabecalho__menu");
var menu = document.querySelector(".menu-lateral");
var principal = document.querySelector(".principal");

botaoMenu.addEventListener("click",()=>{
    menu.classList.toggle("menu-lateral__ativo");
    principal.classList.toggle("principal--ativo");
    principal.classList.toggle("principal");
})

