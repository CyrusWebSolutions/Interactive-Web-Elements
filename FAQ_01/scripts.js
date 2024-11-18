// Select all FAQ items
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const parent = question.parentElement; // FAQ item
    const arrow = question.querySelector('.faq-arrow');

    // Toggle 'open' class
    if (parent.classList.contains('open')) {
      parent.classList.remove('open');
      arrow.style.transform = 'rotate(0deg)';
    } else {
      parent.classList.add('open');
      arrow.style.transform = 'rotate(180deg)';
    }
  });
});
