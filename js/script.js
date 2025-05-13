// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800, // values from 0 to 3000, with step 50ms
    once: true, // whether animation should happen only once - while scrolling down
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
    // Optional: Change hamburger icon to 'X'
    if (navUl.classList.contains('active')) {
        menuToggle.innerHTML = '✕'; // Close icon
        menuToggle.setAttribute('aria-label', 'Close Menu');
    } else {
        menuToggle.innerHTML = '☰'; // Hamburger icon
        menuToggle.setAttribute('aria-label', 'Toggle Menu');
    }
});

// Optional: Close mobile menu when a link is clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navUl.classList.contains('active')) {
            navUl.classList.remove('active');
            menuToggle.innerHTML = '☰';
             menuToggle.setAttribute('aria-label', 'Toggle Menu');
        }
    });
});

// Optional: Add active class to nav link based on scroll position
// (More complex, requires calculating section offsets)