
function AnimationMain(){

    const slides = [
        { framePrefix: 'artist', frameCount: 1, bg: '#EFFF82' },
        { framePrefix: 'funny', frameCount: 4, bg: '#FF8743' },
        { framePrefix: 'quirky', frameCount: 1, bg: '#B9B2FD' },
        { framePrefix: 'wild', frameCount: 1, bg: '#0BA13B' }
    ];
    
    const container = document.getElementById('animation-container');
    const frameImg = document.getElementById('frame');
    const mainWrapper = document.querySelector('.main_wrapper');
    const title_main_anime = document.querySelector('#title_main');
    
    let currentSlide = 0;
    let currentFrame = 1;
    let frameInterval = null;
    let slideTimeout = null;
    let mainWrapperVisible = false;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          mainWrapperVisible = entry.isIntersecting;
          updateContainerBg(); // каждый раз обновляем фон контейнера в зависимости от видимости
        });
      },
      { threshold: 0.8 }
    );
    
    observer.observe(title_main_anime);
    
    // Функция обновляет фон контейнера в зависимости от видимости и текущего слайда
    function updateContainerBg() {
        console.log(mainWrapperVisible)
        if(mainWrapperVisible) {
            mainWrapper.style.background = slides[currentSlide].bg;
        } else {
            mainWrapper.style.background = 'transparent';
        }
    }
    
    function startFrameLoop() {
        const { framePrefix, frameCount } = slides[currentSlide];
        currentFrame = 1;
        frameImg.src = './images/animation/home/' + `${framePrefix}${currentFrame}.png`;
    
        frameInterval = setInterval(() => {
            currentFrame++;
            if (currentFrame > frameCount) currentFrame = 1;
            frameImg.src = './images/animation/home/' + `${framePrefix}${currentFrame}.png`;
        }, 590);
    }
    
    function stopFrameLoop() {
        clearInterval(frameInterval);
    }
    
    function showSlide(index) {
        stopFrameLoop();
        currentSlide = index;
        updateContainerBg(); // Обновляем фон при смене слайда
        startFrameLoop();
    
        clearTimeout(slideTimeout);
        slideTimeout = setTimeout(() => {
            showSlide((currentSlide + 1) % slides.length);
        }, 3000);
    }
    
    container.onclick = () => {
        showSlide((currentSlide + 1) % slides.length);
    };
    
    showSlide(0);
}





function AnimationTitle(slide){
    const frameCount = slide.frameCount; 
    const framePrefix = slide.framePrefix; 
    let currentFrame = 1;
    const frameImg = document.getElementById('frame');

    function nextFrame() {
        currentFrame++;
        if (currentFrame > frameCount) {
            currentFrame = 1; 
        }
        frameImg.src = '../images/animation/titles/' + `${framePrefix}${currentFrame}.png`;
    }

    setInterval(nextFrame, 120); 
}