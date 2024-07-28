//                  home slide
const imgBox = document.querySelector('.slider-container');
const slides = document.getElementsByClassName('slideBox');
var i = 0;
function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

setInterval(nextSlide, 7000);

function prevSlide() {
    slides[i].classList.remove('active');
    i--;
    if (i < 0) {
        i = slides.length - 1;
    }
    slides[i].classList.add('active');
} 


let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}