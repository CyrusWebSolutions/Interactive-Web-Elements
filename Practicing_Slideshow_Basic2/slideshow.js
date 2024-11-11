// slideshow.js
"use strict";

let currentSlide = 0;

function showSlide(index) {
  // Handle index wrap-around
  if (index >= images.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = images.length - 1;
  } else {
    currentSlide = index;
  }

  // Update image and caption
  const slideImage = document.getElementById("slide-image");
  const caption = document.getElementById("caption");

  slideImage.style.backgroundImage = `url(${images[currentSlide]})`;
  caption.textContent = imgCaptions[currentSlide];
}

// Next and Previous functions
function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

// Event listeners for buttons
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Initial display
showSlide(currentSlide);
