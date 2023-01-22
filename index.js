let btn = document.querySelector('.go')
let nav = document.querySelector('.nav-conten')
let body = document.querySelector('body')
let numero = 0
btn.addEventListener('click', () => {
    numero++
    if(numero == 1){
        nav.setAttribute('style', 'display:grid;')
        body.setAttribute('style', 'overflow:hidden;')
    }
    if(numero == 2){
        nav.setAttribute('style', 'display:none;')
        body.setAttribute('style', 'overflow:smooth;')
        numero = 0
    }
})