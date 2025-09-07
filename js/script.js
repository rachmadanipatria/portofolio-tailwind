//navbar-fixed
window.onscroll = () => {
  const totalHeight = document.documentElement.scrollHeight;
  const scrollTop = document.querySelector('#scroll-top');
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }

  if (window.scrollY + window.innerHeight >= totalHeight - 1500) {
    scrollTop.classList.add('opacity-100');
    scrollTop.classList.remove('pointer-events-none');
  } else {
    scrollTop.classList.remove('opacity-100');
    scrollTop.classList.add('pointer-events-none');
  }
};

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});
