const carousel = document.querySelector('.testimonial-wrapper');
const testimonials = document.querySelectorAll('.testimonial');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 1; // Start at the first real testimonial

// Clone the first and last slides for seamless looping
const firstClone = testimonials[0].cloneNode(true);
const lastClone = testimonials[testimonials.length - 1].cloneNode(true);

// Append and prepend clones
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, testimonials[0]);

// Update the testimonial list to include clones
const allTestimonials = carousel.querySelectorAll('.testimonial');

// Set the initial position to the first real slide
carousel.style.transform = `translateX(-${currentIndex * 50}%)`;

// Initialize dots (create one dot per real testimonial)
function initDots() {
  testimonials.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.dataset.index = index; // Store the real index as a data attribute
    dotsContainer.appendChild(dot);
  });
  updateDots(); // Highlight the correct dots
}

// Update active dots
function updateDots() {
  const dots = document.querySelectorAll('.dots button');
  dots.forEach((dot, index) => {
    const firstVisibleIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const secondVisibleIndex = currentIndex % testimonials.length;

    // Check if the dot corresponds to the two visible testimonials
    if (index === firstVisibleIndex || index === secondVisibleIndex) {
      dot.classList.add('active'); // Highlight the dot
    } else {
      dot.classList.remove('active'); // Remove highlight from others
    }
  });
}

// Move to a specific slide
function moveToSlide(index) {
  carousel.style.transition = 'transform 0.5s ease-in-out'; // Enable smooth transition
  currentIndex = index;

  // Calculate the offset for the current index
  const offset = currentIndex * -50; // Each slide moves by 50%
  carousel.style.transform = `translateX(${offset}%)`;

  // Update the dots
  updateDots();
}

// Handle seamless looping with clones
function handleWrapAround() {
  if (currentIndex === 0) {
    // If we're at the cloned last slide, jump to the last real testimonial
    carousel.style.transition = 'none'; // Disable transition for seamless jump
    currentIndex = testimonials.length; // Set to the last real testimonial
    const offset = currentIndex * -50;
    carousel.style.transform = `translateX(${offset}%)`;
  }
  if (currentIndex === allTestimonials.length - 1) {
    // If we're at the cloned first slide, jump to the first real testimonial
    carousel.style.transition = 'none'; // Disable transition for seamless jump
    currentIndex = 1; // Set to the first real testimonial
    const offset = currentIndex * -50;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  // Update the dots after the jump
  updateDots();
}

// Event listeners for arrows
leftArrow.addEventListener('click', () => {
  moveToSlide(currentIndex - 1); // Move one slide left
});

rightArrow.addEventListener('click', () => {
  moveToSlide(currentIndex + 1); // Move one slide right
});

// Add a listener for the end of transitions
carousel.addEventListener('transitionend', handleWrapAround);

// Add click event to dots
dotsContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('dot')) {
    const dotIndex = parseInt(event.target.dataset.index, 10); // Get the real index of the clicked dot
    moveToSlide(dotIndex + 1); // Move to the corresponding testimonial (+1 because of the clone)
  }
});

// Auto-slide functionality
let autoSlideInterval = setInterval(() => {
  moveToSlide(currentIndex + 1);
}, 3000);

// Stop auto-slide when the user interacts
[leftArrow, rightArrow, dotsContainer].forEach((element) => {
  element.addEventListener('click', () => {
    clearInterval(autoSlideInterval);
  });
});

// Initialize dots
initDots();
