document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    
    // 1. SCROLL INTERACTION FUNCTIONALITY
    function handleScroll() {
        // Toggle the 'scrolled' class when the scroll position is more than 80 pixels
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on load

    // 2. SMOOTH SCROLLING FOR INTERNAL LINKS (Enhanced Interactivity)
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight, // Offset by navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

});