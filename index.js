document.querySelector("#close").addEventListener('click', function(){
    document.querySelector("#popup").style.display = "none";
});

const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', function(){
    const menu = document.querySelector(".open-menu");
    menu.classList.toggle('open-menu.classList.display="none"');

    menu.classList.toggle('open-menu.classList.visibility="visible"');
})