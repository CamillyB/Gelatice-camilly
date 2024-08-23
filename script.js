document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.feedback-carousel');
    let index = 0;

    function showNextCard() {
        index = (index + 1) % carousel.children.length;
        const offset = -index * 320; // Ajuste o valor se necessário
        carousel.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextCard, 3000); // Muda o card a cada 3 segundos
});

