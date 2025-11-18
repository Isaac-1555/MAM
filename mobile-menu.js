/**
 * Mobile Menu Toggle Functionality
 * Handles hamburger menu open/close with smooth animations
 */

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
    const closeBtn = document.querySelector('.mobile-menu-close');
    const body = document.body;

    // Open mobile menu
    function openMenu() {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Close mobile menu
    function closeMenu() {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on a navigation link
    const mobileNavLinks = document.querySelectorAll('.mobile-menu-nav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});
