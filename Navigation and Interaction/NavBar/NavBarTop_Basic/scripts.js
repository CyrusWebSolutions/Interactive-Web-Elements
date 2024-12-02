// Optional: Add event listeners if you want the dropdown to also work on click
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', () => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });
});


/* ALTERNATIVE APPROACH
USE THIS FOR IF YOU MAY NEED MORE THAN ONE DROPDOWN IN THE FUTURE
This is why it iterates through using for loop looking for other instances

// Get all dropdown elements
const dropdowns = document.getElementsByClassName('dropdown');

// Loop through all dropdowns
for (let i = 0; i < dropdowns.length; i++) {
    const dropdown = dropdowns[i];
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Show dropdown menu on mouseenter
    dropdown.addEventListener('mouseenter', function () {
        dropdownMenu.style.visibility = 'visible';
        dropdownMenu.style.opacity = '1';
    });

    // Hide dropdown menu on mouseleave
    dropdown.addEventListener('mouseleave', function () {
        dropdownMenu.style.visibility = 'hidden';
        dropdownMenu.style.opacity = '0';
    });
}

USE THIS FOR IF YOU KNOW YOU WILL ONLY EVER NEED ONE DROPDOWN
const dropdown = document.getElementsByClassName('dropdown')[0];
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

// Add event listeners
dropdown.addEventListener('mouseenter', function () {
    dropdownMenu.style.visibility = 'visible';
    dropdownMenu.style.opacity = '1';
});

dropdown.addEventListener('mouseleave', function () {
    dropdownMenu.style.visibility = 'hidden';
    dropdownMenu.style.opacity = '0';
});


*/