// Optional: Add event listeners if you want the dropdown to also work on click
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});
