// Update the date in the footer
document.addEventListener('DOMContentLoaded', function() {
    const dateElement = document.getElementById('date');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('en-US', options);
});

// Simple visitor counter (using localStorage for demo purposes)
// Note: This won't track unique visitors across devices, just for fun!
document.addEventListener('DOMContentLoaded', function() {
    const countElement = document.getElementById('count');
    
    // Get current count from localStorage or start at 0
    let visitCount = localStorage.getItem('visitCount');
    if (visitCount === null) {
        visitCount = 0;
    }
    
    // Increment and save
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    // Animate the counter
    animateCounter(countElement, visitCount);
});

function animateCounter(element, target) {
    let current = 0;
    const increment = Math.ceil(target / 20);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = current.toLocaleString();
    }, 50);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add a little sparkle effect on hover (optional fun feature)
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeft = '4px solid #ff6b6b';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.borderLeft = '4px solid #667eea';
    });
});
