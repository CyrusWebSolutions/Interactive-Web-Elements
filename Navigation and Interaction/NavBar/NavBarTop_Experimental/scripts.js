// Select all dropdown elements
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through each dropdown
dropdowns.forEach((dropdown) => {
    // Add mouse enter event to show the dropdown menu
    dropdown.addEventListener('mouseenter', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.opacity = '1';
    });

    // Add mouse leave event to hide the dropdown menu
    dropdown.addEventListener('mouseleave', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.opacity = '0';
    });
});
