// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// Add animation trigger on scroll
const sections = document.querySelectorAll('.section');
const options = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 1s ease-in';
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Add floating bubbles
function createBubbles() {
    const bubbleCount = 3;
    for (let i = 1; i <= bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        document.body.appendChild(bubble);
    }
}

createBubbles();
