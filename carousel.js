/**
 * Carousel Navigation Functionality
 * Handles left/right arrow navigation for the services scroll wrapper
 */

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.services-scroll-wrapper');
    const leftBtn = document.querySelector('.nav-arrow-left');
    const rightBtn = document.querySelector('.nav-arrow-right');

    if (!scrollContainer || !leftBtn || !rightBtn) return;

    // Calculate scroll amount (card width + gap)
    // We can get this dynamically from the first card
    const getScrollAmount = () => {
        const card = scrollContainer.querySelector('.service-card');
        if (!card) return 316; // Fallback default (280px + 36px)
        
        const cardStyle = window.getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        // Gap is on the container, but we can estimate or just use width + explicit gap from CSS
        // The gap in CSS is 2.25rem = 36px
        return cardWidth + 36; 
    };

    leftBtn.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightBtn.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
