

document.addEventListener('DOMContentLoaded', () => {
    const photos = ['../images/bears/bear1.png', '../images/bears/bear2.png', '../images/bears/bear3.png', '../images/bears/bear4.png', '../images/bears/panda.png', '../images/bears/bear5.png'];
    const track = document.querySelector('.carousel-track');
    const visibleSlides = 4;
    const slideWidth = 100 / visibleSlides;
    
    // Создаем 3 копии для бесконечного эффекта
    function createSlides() {
        track.innerHTML = '';
        const slidesToShow = [...photos, ...photos, ...photos, ...photos];
        
        slidesToShow.forEach((photo, index) => {
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            slide.innerHTML = `<img src="${photo}" alt="Photo ${index + 1}">`;
            track.appendChild(slide);
        });
    }

    createSlides();
    let currentTranslate = -photos.length * slideWidth; // Начинаем со средней копии
    let isDragging = false;
    let startPosX = 0;
    let startTranslate = 0;
    let velocity = 0;
    let lastPosX = 0;
    let lastTime = 0;
    let animationId = null;
    const autoScrollSpeed = 0.05; // Скорость автоскролла
    
    function updatePosition(withTransition = false) {
        track.style.transition = withTransition ? 'transform 0.5s ease-out' : 'none';
        track.style.transform = `translateX(${currentTranslate}vw)`;
    }
    
    function handleMouseDown(e) {
        stopAutoScroll();
        isDragging = true;
        startPosX = getPositionX(e);
        startTranslate = currentTranslate;
        lastPosX = startPosX;
        lastTime = Date.now();
        track.style.cursor = 'grabbing';
        updatePosition(false);
    }
    
    function handleMouseMove(e) {
        if (!isDragging) return;
        
        const currentPosX = getPositionX(e);
        const now = Date.now();
        const deltaX = currentPosX - lastPosX;
        const deltaTime = now - lastTime;
        
        currentTranslate += (deltaX / window.innerWidth) * 100;
        
        if (deltaTime > 0) {
            velocity = deltaX / deltaTime * 0.5;
        }
        
        lastPosX = currentPosX;
        lastTime = now;
        
        checkBoundaries();
        updatePosition(false);
    }
    
    function handleMouseUp() {
        if (!isDragging) return;
        
        isDragging = false;
        track.style.cursor = 'grab';
        
        // Плавное замедление
        const applyInertia = () => {
            if (Math.abs(velocity) > 0.1) {
                currentTranslate += (velocity * 15 / window.innerWidth) * 100;
                velocity *= 0.95;
                
                checkBoundaries();
                updatePosition(false);
                animationId = requestAnimationFrame(applyInertia);
            } else {
                startAutoScroll(); // Запускаем автоскролл после остановки
            }
        };
        
        cancelAnimationFrame(animationId);
        animationId = requestAnimationFrame(applyInertia);
    }
    
    function checkBoundaries() {
        const minPosition = -slideWidth * (photos.length * 3 - visibleSlides);
        const maxPosition = 0;
        
        if (currentTranslate < minPosition) {
            currentTranslate += photos.length * slideWidth;
        } else if (currentTranslate > maxPosition) {
            currentTranslate -= photos.length * slideWidth;
        }
    }
    
    function startAutoScroll() {
        cancelAnimationFrame(animationId);
        
        const autoScroll = () => {
            if (!isDragging) {
                currentTranslate -= autoScrollSpeed;
                checkBoundaries();
                updatePosition(false);
            }
            animationId = requestAnimationFrame(autoScroll);
        };
        
        animationId = requestAnimationFrame(autoScroll);
    }
    
    function stopAutoScroll() {
        cancelAnimationFrame(animationId);
    }
    
    function getPositionX(event) {
        return event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    }
    
    function init() {
        updatePosition();
        
        track.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        
        track.addEventListener('touchstart', (e) => {
            e.preventDefault();
            handleMouseDown(e.touches[0]);
        }, { passive: false });
        
        track.addEventListener('touchmove', (e) => {
            e.preventDefault();
            handleMouseMove(e.touches[0]);
        }, { passive: false });
        
        track.addEventListener('touchend', handleMouseUp);
        
        // Запускаем автоскролл при загрузке
        startAutoScroll();
    }
    
    init();
});



/* v1 */

// document.addEventListener('DOMContentLoaded', () => {
//     const track = document.querySelector('.carousel-track');
//     const photos = ['../images/bears/bear1.png', '../images/bears/bear2.png', '../images/bears/bear3.png', '../images/bears/bear4.png', '../images/bears/panda.png', '../images/bears/bear5.png'];

//     const visibleSlides = 4;
//     const slideWidth = 100 / visibleSlides;
    
//     // Создаем 3 копии массива для бесконечности
//     function createSlides() {
//         track.innerHTML = '';
//         const slidesToShow = [...photos, ...photos, ...photos, photos[0], photos[1]];
        
//         slidesToShow.forEach((photo, index) => {
//             const slide = document.createElement('div');
//             slide.className = 'carousel-slide';
//             slide.innerHTML = `<img src="${photo}" alt="Photo ${index + 1}">`;
//             track.appendChild(slide);
//         });
//     }

//     createSlides();
//     const slideCount = photos.length * 3;
//     let currentTranslate = -photos.length * slideWidth; // Начинаем со средней копии
//     let isDragging = false;
//     let startPosX = 0;
//     let startTranslate = 0;
//     let velocity = 0;
//     let lastPosX = 0;
//     let lastTime = 0;
//     let animationId = null;
    
//     function updatePosition(withTransition = false) {
//         track.style.transition = withTransition ? 'transform 0.5s ease-out' : 'none';
//         track.style.transform = `translateX(${currentTranslate}vw)`;
//     }
    
//     function handleMouseDown(e) {
//         isDragging = true;
//         startPosX = getPositionX(e);
//         startTranslate = currentTranslate;
//         lastPosX = startPosX;
//         lastTime = Date.now();
//         track.style.cursor = 'grabbing';
//         updatePosition(false);
        
//         cancelAnimationFrame(animationId);
//         animationId = requestAnimationFrame(animation);
//     }
    
//     function handleMouseMove(e) {
//         if (!isDragging) return;
        
//         const currentPosX = getPositionX(e);
//         const now = Date.now();
//         const deltaX = currentPosX - lastPosX;
//         const deltaTime = now - lastTime;
        
//         currentTranslate += (deltaX / window.innerWidth) * 100;
        
//         if (deltaTime > 0) {
//             velocity = deltaX / deltaTime * 0.5; // Чувствительность скорости
//         }
        
//         lastPosX = currentPosX;
//         lastTime = now;
        
//         checkBoundaries();
//     }
    
//     function handleMouseUp() {
//         if (!isDragging) return;
        
//         isDragging = false;
//         track.style.cursor = 'grab';
        
//         // Применяем инерцию
//         const applyInertia = () => {
//             if (Math.abs(velocity) > 0.1) {
//                 currentTranslate += (velocity * 15 / window.innerWidth) * 100;
//                 velocity *= 0.95; // Замедление
                
//                 checkBoundaries();
//                 updatePosition(false);
//                 animationId = requestAnimationFrame(applyInertia);
//             } else {
//                 // Плавная фиксация
//                 snapToNearest();
//             }
//         };
        
//         applyInertia();
//     }
    
//     function checkBoundaries() {
//         const threshold = slideWidth * 0.5;
//         const minPosition = -slideWidth * (slideCount - visibleSlides + 1);
//         const maxPosition = -slideWidth;
        
//         // Плавный переход в начало при достижении конца
//         if (currentTranslate < minPosition - threshold) {
//             currentTranslate += photos.length * slideWidth;
//             updatePosition(false);
//         } 
//         // Плавный переход в конец при достижении начала
//         else if (currentTranslate > maxPosition + threshold) {
//             currentTranslate -= photos.length * slideWidth;
//             updatePosition(false);
//         }
//     }
    
//     function snapToNearest() {
//         const slideIndex = Math.round(-currentTranslate / slideWidth);
//         currentTranslate = -slideIndex * slideWidth;
//         updatePosition(true);
//     }
    
//     function getPositionX(event) {
//         return event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
//     }
    
//     function animation() {
//         updatePosition(false);
//         if (isDragging) {
//             animationId = requestAnimationFrame(animation);
//         }
//     }
    
//     function init() {
//         updatePosition();
        
//         track.addEventListener('mousedown', handleMouseDown);
//         window.addEventListener('mousemove', handleMouseMove);
//         window.addEventListener('mouseup', handleMouseUp);
        
//         track.addEventListener('touchstart', (e) => {
//             e.preventDefault();
//             handleMouseDown(e.touches[0]);
//         }, { passive: false });
        
//         track.addEventListener('touchmove', (e) => {
//             e.preventDefault();
//             handleMouseMove(e.touches[0]);
//         }, { passive: false });
        
//         track.addEventListener('touchend', handleMouseUp);
//     }
    
//     init();
// });