var botaoMenu = document.querySelector(".cabecalho__menu");
var menu = document.querySelector(".menu-lateral");

botaoMenu.addEventListener("click",()=>{
    menu.classList.toggle("menu-lateral__ativo");
})

