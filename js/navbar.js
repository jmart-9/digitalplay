function setActive(event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
}