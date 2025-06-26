const lenis = new Lenis({
    lerp: 0.1, // Уровень плавности (0-1)
    smoothWheel: true // Плавный скролл колесом
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);