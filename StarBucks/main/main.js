const btnMobile = document.getElementById('btn-mobile');

function togglemenu(event) {
    if (event.type == 'touchstart') event.preventDefault()
const nav = document.getElementById('nav');    
nav.classList.toggle('active')
const active = nav.classList.contains('active');
event.currentTarget.setAttribute('aria-expanded', 'true');
if ('active')  {
    event.currentTarget.setAttribute('aria-ãbel', 'fechar menu');
} else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu')
}
}


btnMobile.addEventListener('click', togglemenu);
btnMobile.addEventListener('touchstart', togglemenu);