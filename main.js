document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');

    function changeBackground() {
        const randomColor = getRandomColor();
        container.style.background = randomColor;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    container.addEventListener('mouseover', function() {
        setInterval(changeBackground, 3000); // Change background every 3 seconds (3000 milliseconds)
    });

    container.addEventListener('mouseout', function() {
        container.style.background = ''; // Reset background on mouseout
    });
});
