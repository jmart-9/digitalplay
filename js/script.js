document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('menu_hamburguesa');
    const menuIcon = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link-menu .nav-links');

    // Toggle al hacer clic en el ícono
    menuIcon.addEventListener('click', () => {
        checkbox.checked = !checkbox.checked;
    });

    // Cierra el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            checkbox.checked = false;
        });
    });
});
