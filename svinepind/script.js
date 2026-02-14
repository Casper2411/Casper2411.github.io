/*
	IMPLEMENTATION BY GEMINI
*/

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Function to create falling particles
function createParticle(emoji) {
    const particle = document.createElement('div');
    particle.innerHTML = emoji;
    particle.classList.add('particle');
    
    // Random horizontal position and speed
    particle.style.left = Math.random() * 100 + "vw";
    particle.style.animationDuration = (Math.random() * 2 + 2) + "s";
    
    document.body.appendChild(particle);
    
    // Remove from DOM after animation finishes
    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// YES EFFECT
yesBtn.addEventListener('click', () => {
    // Create 50 hearts
    for(let i = 0; i < 50; i++) {
        setTimeout(() => createParticle('❤️'), i * 50);
    }
    alert("Hvor er du dejlig! Jeg elsker dig! ❤️");
});

// NO EFFECT
noBtn.addEventListener('click', () => {
    // Change background to black
    document.body.classList.add('dark-mode');
    
    // Rain broken hearts
    for(let i = 0; i < 40; i++) {
        setTimeout(() => createParticle('😭'), i * 100);
    }
    
    // Revert after 5 seconds
    setTimeout(() => {
        document.body.classList.remove('dark-mode');
    }, 5000);
});