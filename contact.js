const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', function(){
    const menu = document.querySelector(".open-hamburger");
    menu.classList.toggle("show-menu");
})