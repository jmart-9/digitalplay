const menu = document.querySelector('.nav-menu');
const close = document.querySelector('.nav-close');
const navLinks = document.querySelector('.nav-link-menu');

menu.addEventListener('click', () => {
  navLinks.classList.add('show');
});

close.addEventListener('click', () => {
  navLinks.classList.remove('show');
});
