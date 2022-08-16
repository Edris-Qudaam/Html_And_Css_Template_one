let menu = document.querySelector('#btn-menu');
let navbar = document.querySelector('.navbar .nav');
let closeM = document.querySelector('#btn-close');


menu.onclick = () => {
    navbar.classList.toggle('active');
}

closeM.onclick = () => {
    navbar.classList.remove('active');
}