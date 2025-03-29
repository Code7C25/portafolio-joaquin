// Selecciona todas las imágenes del carrusel
const slides = document.querySelectorAll('.slide');

// Selecciona los botones de navegación
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// Variable para rastrear la imagen central actual
let index = 0;

// Función para actualizar el carrusel y mover las imágenes
function updateCarousel() {
    slides.forEach((slide, i) => {
        // Elimina todas las clases ('active', 'left', 'right') y oculta todas las imágenes
        slide.classList.remove('active', 'left', 'right');
        slide.style.opacity = '0';

        // Si la imagen es la actual, la centra y la muestra con opacidad 1
        if (i === index) {
            slide.classList.add('active');
            slide.style.opacity = '1';
        } 
        // Si la imagen es la inmediatamente anterior, la coloca a la izquierda
        else if (i === (index - 1 + slides.length) % slides.length) {
            slide.classList.add('left');
            slide.style.opacity = '0.5'; // Se muestra con menor opacidad
        } 
        // Si la imagen es la inmediatamente siguiente, la coloca a la derecha
        else if (i === (index + 1) % slides.length) {
            slide.classList.add('right');
            slide.style.opacity = '0.5'; // Se muestra con menor opacidad
        }
    });
}

// Evento para botón "anterior"
prev.addEventListener('click', () => {
    // Si estamos en la primera imagen, saltamos a la última (para el bucle)
    index = (index === 0) ? slides.length - 1 : index - 1;
    updateCarousel(); // Se actualiza el carrusel
});

// Evento para botón "siguiente"
next.addEventListener('click', () => {
    // Si estamos en la última imagen, volvemos a la primera (para el bucle)
    index = (index === slides.length - 1) ? 0 : index + 1;
    updateCarousel(); // Se actualiza el carrusel
});

// Llamamos a la función una vez para inicializar la posición de las imágenes
updateCarousel();

