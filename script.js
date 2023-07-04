var botaoMenu = document.querySelector(".cabecalho__menu");
var menu = document.querySelector(".menu-lateral");
var sidebar = document.querySelector("#sidebar");
var toggle = document.querySelector("#toggle");

document.onclick = function(e){
    if(!botaoMenu.contains(e.target) && !menu.contains(e.target)){
        menu.classList.remove("menu-lateral__ativo");
    }
}

botaoMenu.addEventListener("click",()=>{
    menu.classList.toggle("menu-lateral__ativo");
}) 

