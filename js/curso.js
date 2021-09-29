const contedorInfo =document.querySelector('.curso__details--text')
const contenedorPadre = document.querySelector('.cursos__details')
const buttonCerrar = document.querySelector('.cursos__details--btn')

const subMenuBtn = document.querySelectorAll('.submenu-btn')
for(let i=0; i<subMenuBtn.length;i++){
    subMenuBtn[i].addEventListener('click', function(){
        if(window.innerWidth < 964){
            const subMenu = this.nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains('desplegar')){
                subMenu.classList.remove('desplegar');
                subMenu.removeAttribute('style');
            }else{
                subMenu.classList.add('desplegar')
                subMenu.style.height = height + "px";
            }
        }
    })
}

const cursos = [
    {
        id:1,
        title:'title1',
        contenido:'parrafo1'
    },
    {
        id:2,
        title:'title2',
        contenido:'parrafo2'
    },
    {
        id:3,
        title:'title3',
        contenido:'parrafo3'
    },
    {
        id:4,
        title:'title4',
        contenido:'parrafo4'
    },
    {
        id:5,
        title:'title5',
        contenido:'parrafo5'
    },
    {
        id:6,
        title:'title6',
        contenido:'parrafo6'
    },
    {
        id:7,
        title:'title7',
        contenido:'parrafo7'
    },
    {
        id:8,
        title:'title8',
        contenido:'parrafo8'
    },
    {
        id:9,
        title:'title9',
        contenido:'parrafo9'
    },
    {
        id:10,
        title:'title10',
        contenido:'parrafo10'
    }
]
contedorInfo.innerHTML = `${cursos[0].title} <br> ${cursos[0].contenido}`
contedorInfo.classList.add('bloque')

const op1 = document.querySelector('.cursos__contain--item1');
const op2 = document.querySelector('.cursos__contain--item2');
const op3 = document.querySelector('.cursos__contain--item3');
const op4 = document.querySelector('.cursos__contain--item4');
const op5 = document.querySelector('.cursos__contain--item5');
const op6 = document.querySelector('.cursos__contain--item6');
const op7 = document.querySelector('.cursos__contain--item7');
const op8 = document.querySelector('.cursos__contain--item8');
const op9 = document.querySelector('.cursos__contain--item9');
const op10 = document.querySelector('.cursos__contain--item10');
const opciones = [op1,op2,op3,op4,op5,op6,op7,op8,op9,op10]

const detalles = ()=>(
    contedorInfo.innerHTML = `${cursos[0].title} <br> ${cursos[0].contenido}`
)
const detalles2 = ()=>(
    contedorInfo.innerHTML = `${cursos[1].title} <br> ${cursos[1].contenido}`,
    contenedorPadre.classList.toggle('m2')
)
const detalles3 = ()=>(
    contedorInfo.innerHTML = `${cursos[2].title} <br> ${cursos[2].contenido}`,
    contenedorPadre.classList.toggle('m3')
)
const detalles4 = ()=>(
    contedorInfo.innerHTML = `${cursos[3].title} <br> ${cursos[3].contenido}`,
    contenedorPadre.classList.toggle('m4')
)
const detalles5 = ()=>(
    contedorInfo.innerHTML = `${cursos[4].title} <br> ${cursos[4].contenido}`,
    contenedorPadre.classList.toggle('m5')
)
const detalles6 = ()=>(
    contedorInfo.innerHTML = `${cursos[5].title} <br> ${cursos[5].contenido}`,
    contenedorPadre.classList.toggle('m6')
)
const detalles7 = ()=>(
    contedorInfo.innerHTML = `${cursos[6].title} <br> ${cursos[6].contenido}`,
    contenedorPadre.classList.toggle('m7')
)
const detalles8 = ()=>(
    contedorInfo.innerHTML = `${cursos[7].title} <br> ${cursos[7].contenido}`,
    contenedorPadre.classList.toggle('m8')
)
const detalles9 = ()=>(
    contedorInfo.innerHTML = `${cursos[8].title} <br> ${cursos[8].contenido}`,
    contenedorPadre.classList.toggle('m9')
)
const detalles10 = ()=>(
    contedorInfo.innerHTML = `${cursos[9].title} <br> ${cursos[9].contenido}`
)

switch(opciones){
    case opciones[0].addEventListener('click', detalles):
        break;
    case opciones[1].addEventListener('click', detalles2):
        break;
    case opciones[2].addEventListener('click', detalles3):
        break;
    case opciones[3].addEventListener('click', detalles4):
        break;
    case opciones[4].addEventListener('click', detalles5):
        break;
    case opciones[5].addEventListener('click', detalles6):
        break;
    case opciones[6].addEventListener('click', detalles7):
        break;
    case opciones[7].addEventListener('click', detalles8):
        break;
    case opciones[8].addEventListener('click', detalles9):
        break;
    case opciones[9].addEventListener('click', detalles10):
        break;
    default:
        console.log('no hay datos')
}