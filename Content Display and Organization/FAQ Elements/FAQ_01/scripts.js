// Select all FAQ items
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const parent = question.closest('.faq-item'); // Get the clicked FAQ item
    const isOpen = parent.classList.contains('open'); // Check if it's already open

    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== parent) { // Ensure only the clicked item toggles
        item.classList.remove('open');
        const answer = item.querySelector('.faq-answer');
        answer.style.maxHeight = null; // Reset max-height
        const arrow = item.querySelector('.faq-arrow');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      }
    });

    // Toggle the clicked FAQ item
    if (!isOpen) {
      parent.classList.add('open');
      const answer = parent.querySelector('.faq-answer');
      const arrow = question.querySelector('.faq-arrow');
      answer.style.maxHeight = `${answer.scrollHeight}px`;
      arrow.style.transform = 'rotate(180deg)';
    } else {
      parent.classList.remove('open');
      const answer = parent.querySelector('.faq-answer');
      const arrow = question.querySelector('.faq-arrow');
      answer.style.maxHeight = null;
      arrow.style.transform = 'rotate(0deg)';
    }
  });
});
