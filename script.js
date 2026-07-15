document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.primary-nav a');
    const current = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === current || (!current && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});
