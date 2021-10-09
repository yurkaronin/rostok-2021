const menuBtn = document.querySelector('.js-humburger');
const mainMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  mainMenu.classList.toggle('show');
});
