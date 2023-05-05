const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slide');
const menu = document.querySelector('.slider-menu');
const menuItems = menu.querySelectorAll('.menu-item');

let currentSlide = 0;

function showSlide(n) {
  if (n < 0) {
    n = slides.length - 1;
  } else if (n >= slides.length) {
    n = 0;
  }
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
  menuItems.forEach(item => item.classList.remove('active'));
  menuItems[n].classList.add('active');
  currentSlide = n;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function setSlide(n) {
  showSlide(n);
}

menuItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    setSlide(i);
  });
});

setInterval(nextSlide, 5000); //