document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navigation");
    const navOffset = nav.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= navOffset) {
            nav.classList.add("fixed");
        } else {
            nav.classList.remove("fixed");
        }
    });

    // Seleccionamos el botón de menú y la lista de navegación
    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.getElementById('navigation');

    // Función para mostrar/ocultar el menú
    menuToggle.addEventListener('click', () => {
        navigation.classList.toggle('show');
    });
});

