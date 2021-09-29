const buttonMenu = document.querySelector('.header__button')
const menu = document.querySelector('.header__menu')

const ocultar = () =>(
    menu.classList.toggle('visible')
)
buttonMenu.addEventListener('click',ocultar)