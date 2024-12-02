"use strict";

let currentSlide = 0;

function showSlide(index) {
  if (index >= images.length) {
    currentSlide = 0;

  } else if (index < 0) {
    currentSlide = images.length - 1;

  } else {
    currentSlide = index;

  }

  const slideImage = document.getElementById("slide-image");
  const caption = document.getElementById("caption");

  slideImage.style.backgroundImage = `url(${images[currentSlide]})`;
  caption.textContent = imgCaptions[currentSlide];
}

function nextSlide() {
  showSlide(currentSlide + 1);
}
function prevSlide() {
  showSlide(currentSlide - 1);
}

document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

showSlide(currentSlide);