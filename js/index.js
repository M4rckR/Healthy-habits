let cerrarMenu = document.querySelector('#cerrar--menu');
let menuNav = document.querySelector('#menu--nav')
let abrirMenu = document.querySelector('#abrir--menu')
let confirmacionCorreo = document.querySelector('.confirmacion__correo')
let enviarCorreo = document.querySelector('#enviar__correo')
let correoLinea = document.querySelector('#correo__linea')
let loginRecuperar = document.querySelector('.login__recuperar')


enviarCorreo.addEventListener('click', (event) => {
    event.preventDefault();

    if (correoLinea.value === '') {
        alert('Por favor, ingrese su correo electrónico.');
    } else if (!correoLinea.validity.valid) {
        alert('Por favor, ingrese un correo electrónico válido.');
    } else {
        confirmacionCorreo.classList.toggle('hidden__correo');
        loginRecuperar.classList.toggle('hidden__correo')
    }


})



// Agregar evento para cerrar el menú al hacer clic en el botón X
cerrarMenu.addEventListener('click', () => {
    menuNav.classList.toggle('header__menu--hidden')
})

// Agregar evento para abrir el menú al hacer clic en el botón de menú
abrirMenu.addEventListener('click', () => {
    menuNav.classList.remove('header__menu--hidden');
})

// Verificar el tamaño de pantalla al cargar y al cambiar de tamaño
function verificarTamanoPantalla() {
    if (window.innerWidth < 768) {
        menuNav.classList.add('header__menu--hidden');
    } else {
        menuNav.classList.remove('header__menu--hidden');
    }
}

verificarTamanoPantalla();

window.addEventListener('resize', () => {
    verificarTamanoPantalla();
})


