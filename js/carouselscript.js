document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const images = document.querySelectorAll('.carousel img');
    const totalImages = images.length;

    function cambiarSlide() {
        images[index].classList.remove('active'); // Oculta la imagen actual
        index = (index + 1) % totalImages; // Pasa a la siguiente imagen
        images[index].classList.add('active'); // Muestra la nueva imagen
    }

    // Cambia la imagen cada 5 segundos
    setInterval(cambiarSlide, 5000);
});
