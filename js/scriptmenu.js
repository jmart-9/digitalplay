function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');  // Alterna la clase "active" para mostrar/ocultar el menú

    // Agregar un evento de clic a cada enlace solo si el menú está activo
    if (navLinks.classList.contains('active')) {
        const links = navLinks.querySelectorAll('li a'); // Selecciona todos los enlaces dentro de los elementos <li>
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active'); // Oculta el menú al hacer clic en un enlace
            }, { once: true }); // Solo se ejecuta una vez por enlace
        });
    }
}