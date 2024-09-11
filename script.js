const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.getElementById('background').appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function generateNoise() {
    const imageData = ctx.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
        const gray = Math.random() * 255;
        data[i] = gray;     // Red
        data[i+1] = gray;   // Green
        data[i+2] = gray;   // Blue
        data[i+3] = 30;     // Alpha
    }

    ctx.putImageData(imageData, 0, 0);
}

function animate() {
    generateNoise();
    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

animate();

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }

    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }

    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }

    nextBtn.addEventListener('click', nextCard);
    prevBtn.addEventListener('click', prevCard);

    // Show the first card initially
    showCard(currentIndex);
});
