const menuToggle = document.querySelector('.menu-toggle');
const body = document.querySelector('body');
// const nav = document.querySelector('.nav-list')
const links = document.querySelectorAll('.nav-link');


menuToggle.addEventListener('click', () => {
  body.classList.toggle('open');
})

links.forEach(link => {
  link.addEventListener('click', () => {
    body.classList.toggle('open');
  })
})

// Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left', {
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-right', {
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 300
});

sr.reveal('.animate-top', {
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 300
})

sr.reveal('.animate-bottom', {
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 300
})