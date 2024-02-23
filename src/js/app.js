document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})
function iniciarApp() {
    header();
    crearGaleria();
}
function header() {
    const barra = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival')
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
        if (sobreFestival.getBoundingClientRect().top < 0) {
            barra.classList.add('fijo')
            body.classList.add('fijo-body')
        } else{
            barra.classList.remove('fijo')
            body.classList.remove('fijo-body')
        }
    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i < 13; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `<img src="src/img/thumb/${i}.jpg" alt="Imagen galeria ${i}">`
        
        imagen.onclick = function () {
            mostrarImagen(i);
        }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `<img src="src/img/grande/${id}.jpg" alt="Imagen galeria ${id}">`
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay')

    overlay.onclick = function(){
        const body = document.querySelector('body')
        body.classList.remove('fijar-body')
        overlay.remove();
    }

    const cerrarModal = document.createElement('P');
    cerrarModal.textContent = 'X'
    cerrarModal.classList.add('btn-cerrar')

    cerrarModal.onclick = function () {
        const body = document.querySelector('body')
        body.classList.remove('fijar-body')
        overlay.remove();
    }


    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijar-body')
}