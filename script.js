const lid = document.getElementById('lid');
const mainBox = document.getElementById('mainBox');
const surpriseSection = document.getElementById('surpriseSection');
const fileInput = document.getElementById('fileInput');
const dropZone = document.getElementById('dropZone');
const userPhoto = document.getElementById('userPhoto');
const previewText = document.getElementById('previewText');
const wishText = document.getElementById('wishText');

const messages = [
    "You're the caramel filling to my chocolate life! ❤️",
    "Sending you a million virtual chocolates, Jaan!",
    "I love you more than Dairy Milk, Silk, and Ferrero combined!",
    "You are my favorite treat today and forever."
];

let messageIndex = 0;

// 1. Box Opening Mechanic
mainBox.addEventListener('click', () => {
    lid.style.transform = 'translateY(-200px) rotateX(45deg)';
    lid.style.opacity = '0';
    
    setTimeout(() => {
        mainBox.style.display = 'none';
        surpriseSection.classList.remove('hidden');
        createHearts(); // Trigger background animation
    }, 800);
});

// 2. Photo Upload Surprise
dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            userPhoto.src = event.target.result;
            userPhoto.classList.remove('hidden');
            previewText.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }
});

// 3. Message Cycle Surprise
function nextSurprise() {
    wishText.style.opacity = 0;
    setTimeout(() => {
        wishText.innerText = messages[messageIndex];
        wishText.style.opacity = 1;
        messageIndex = (messageIndex + 1) % messages.length;
    }, 300);
}

// 4. Advanced Particle Animation
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '🍫';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-50px';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heart.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        heart.style.opacity = Math.random();
        document.body.appendChild(heart);
    }
}

// Add falling animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to { transform: translateY(110vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);
