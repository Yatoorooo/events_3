'use strict';
const images = ['3.jpg', '7.png', '8.png', '9.png', '10.jpg'];
let currentSlideIndex = 0;

function showSlide(index) {
    const sliderImage = document.getElementById('slider-image');
    sliderImage.src = images[index];

    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (index === images.length - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

function nextSlide() {
    if (currentSlideIndex < images.length - 1) {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }
}

function prevSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        showSlide(currentSlideIndex);
    }
}


showSlide(currentSlideIndex);