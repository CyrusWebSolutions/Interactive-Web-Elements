"use strict";

let currentSlide = 0;

function showSlide(index) {   //This function takes currentSlide +-1 and creates an index for displaying index 0 -> 11 of images and captions arrays.
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

document.getElementById("prev").addEventListener("click", prevSlide);
document.getElementById("next").addEventListener("click", nextSlide);

showSlide(currentSlide);