// Handle form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  console.log('Form Data Submitted:', data);

  alert('Thank you for reaching out! We will get back to you soon.');

  contactForm.reset(); // Reset the form fields
});
