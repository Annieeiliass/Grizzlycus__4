const main_wrapper_change_bg = document.querySelector('.main_wrapper');
const title_main_change_bg = document.getElementById('title_main');

// Intersection Observer для детекции 4-го блока
const observer_change_bg = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Когда 4-й блок виден — переключаем фон в абсолютный режим
                main_wrapper_change_bg.classList.add('colored')
            } else {
                main_wrapper_change_bg.classList.remove('colored')
            }
        });
    },
    {threshold: 1}
);

observer_change_bg.observe(title_main_change_bg);


