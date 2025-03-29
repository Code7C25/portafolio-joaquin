// Obtener el checkbox y el cuerpo de la página
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

// Comprobar si el modo oscuro ya está activado
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.checked = true;  // Poner el interruptor en la posición activa (modo oscuro)
}

// Función para alternar entre los modos
toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark'); // Guardar el estado en localStorage
    } else {
        body.classList.remove('dark-mode');
        localStorage.removeItem('mode'); // Eliminar el estado guardado
    }
});
