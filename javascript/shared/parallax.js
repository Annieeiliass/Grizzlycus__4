document.addEventListener('mousemove', (e) => {
    // Получаем размеры окна
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Вычисляем нормализованные координаты курсора (от -1 до 1)
    const mouseX = (e.clientX / windowWidth) * 2 - 1;
    const mouseY = (e.clientY / windowHeight) * 2 - 1;
    
    // Получаем все изображения
    const images = document.querySelectorAll('.moving-image');
    
    // Для каждого изображения применяем смещение
    images.forEach((img, index) => {
        // Множитель для разной силы смещения (можно настроить)
        const factor = 0.1 * (index + 1);
        
        // Вычисляем смещение (противоположное движению курсора)
        const offsetX = -mouseX * 200 * factor; // 20 - максимальное смещение в пикселях
        const offsetY = -mouseY * 100 * factor;
        
        // Применяем смещение через transform
        img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });
});