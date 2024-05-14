function updateDiagonalMargin() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const diagonalLength = Math.sqrt(Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2));
    const diagonalMargin = 0.03 * diagonalLength;
    const stripeHeight = 0.03 * diagonalLength;

    document.documentElement.style.setProperty('--diagonal-margin', `${diagonalMargin}px`);
    document.documentElement.style.setProperty('--stripe-height', `${stripeHeight}px`);
}

window.addEventListener('resize', updateDiagonalMargin);
updateDiagonalMargin();