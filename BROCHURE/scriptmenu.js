const btnMenu = document.getElementById('btnMenu');
const menu = document.getElementById('menu');
let timeoutId;

function mostrarMenu() {
    clearTimeout(timeoutId);
    menu.style.display = 'block';
    menu.classList.add('mostrar');
}

function ocultarMenu() {
    timeoutId = setTimeout(() => {
        menu.style.display = 'none';
        menu.classList.remove('mostrar')
    }, 150);
}

btnMenu.addEventListener('mouseenter', mostrarMenu);
menu.addEventListener('mouseenter', mostrarMenu);
btnMenu.addEventListener('mouseleave', ocultarMenu);
menu.addEventListener('mouseleave', ocultarMenu);