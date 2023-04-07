const commentName = document.querySelector('forms.comment-form.comment-name.input');
const commentEmail = document.querySelector('input[name=comment-email]');
const commentText= document.querySelector('input[name=comment-text]');


document.querySelector("#comment-form").addEventListener('submit', function(event){
    event.preventDefault();
    console.log('Form submitted!')


})

const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', function(){
    const menu = document.querySelector(".open-hamburger");
    menu.classList.toggle("show-menu");
})