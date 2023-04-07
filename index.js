document.querySelector("#close").addEventListener('click', function(){
    document.querySelector("#popup").style.display = "none";
});

const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', function(){
    const menu = document.querySelector(".open-hamburger");
    menu.classList.toggle("show-menu");
})


