document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navigation");
    const navOffset = nav.offsetTop; // Obtiene la posición inicial de la barra

    window.addEventListener("scroll", function () {
        if (window.scrollY >= navOffset) {
            nav.classList.add("fixed");
        } else {
            nav.classList.remove("fixed");
        }
    });
});
