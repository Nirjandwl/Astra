// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navButtons = document.querySelector('.nav-buttons');
const navButtonActions = document.querySelector('.button');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navButtons.classList.toggle('active');
    navButtonActions.classList.toggle('active');
});

// Nav button highlighting
document.querySelectorAll('.nav-buttons li a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'home' class from all links
        document.querySelectorAll('.nav-buttons li a').forEach(l => l.classList.remove('home'));
        // Add 'home' class to clicked link
        this.classList.add('home');
    });
});

