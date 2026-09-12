// Open surprise
function openSurprise() {
    const welcome = document.getElementById('welcome');
    const main = document.getElementById('main');
    
    welcome.style.opacity = '0';
    welcome.style.transition = 'opacity 0.5s ease-out';
    
    setTimeout(() => {
        welcome.style.display = 'none';
        main.style.display = 'block';
        main.style.animation = 'slideIn 0.8s ease-out';
    }, 500);
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Show message popup
function showMessage(num) {
    const messages = [
        "I love you babe, happy Birthday 💌",
        "You'll always be loved 🌸",
        "My girl ⭐"
    ];
    
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    
    popupText.textContent = messages[num - 1];
    popup.classList.add('show');
}

// Close popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    const popup = document.getElementById('popup');
    const popupContent = document.querySelector('.popup-content');
    
    if (popup.classList.contains('show') && !popupContent.contains(e.target)) {
        closePopup();
    }
});

// Create confetti
function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    const colors = ['#ff6b9d', '#c44569', '#ffd6e8', '#667eea', '#764ba2', '#FFD700', '#FF69B4'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `fall ${2 + Math.random() * 1}s linear forwards`;
        
        confettiContainer.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Add fall animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});
