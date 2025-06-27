

function getPhotoContainer(photoContainer){

    return () => {
        let photoIndex = 0;
        let isInside = false;
        let lastMoveTime = Date.now();
        let inactivityTimer;
        const moveDelay = 100;  // Интервал между фото при движении (мс)
        const inactivityDelay = 1000; // 2 секунды бездействия

        function createPhoto(x, y) {
            const img = document.createElement('img');
            img.src = photos[photoIndex];
            img.className = 'photo';
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            photoContainer.appendChild(img);

            // Удаление через 7 секунд
            const removalTimer = setTimeout(() => {
                fadeOutAndRemove(img);
            }, 7000);

            // Сохраняем таймер для возможной отмены
            img.dataset.removalTimer = removalTimer;

            photoIndex = (photoIndex + 1) % photos.length;
        }

        // Плавное исчезновение и удаление
        function fadeOutAndRemove(img) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.1s ease';
            setTimeout(() => img.remove(), 100);
        }

        // Удаление всех фото по порядку при бездействии
        function startInactivityCleanup() {
            const photos = Array.from(photoContainer.querySelectorAll('.photo'));
            let delay = 0;

            photos.forEach((img, index) => {
                delay = index * 60; // Интервал между удалениями 
                setTimeout(() => {
                clearTimeout(img.dataset.removalTimer); // Отменяем стандартное удаление
                fadeOutAndRemove(img);
                }, delay);
            });
        }


        function handleMouseMove(e) {
            const now = Date.now();
            
            // Сброс таймера бездействия
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(startInactivityCleanup, inactivityDelay);
            
            // Создание фото с интервалом
            if (now - lastMoveTime > moveDelay) {
                createPhoto(e.clientX, e.clientY + window.scrollY);
                lastMoveTime = now;
            }
        }

        function checkPosition(e) {
            const rect = photoContainer.getBoundingClientRect();
            const isNowInside = (
                e.clientX >= rect.left &&
                e.clientX <= rect.right &&
                e.clientY >= (rect.top + 100) &&
                e.clientY <= (rect.bottom - 100)
            );

            if (isNowInside && !isInside) {
                document.addEventListener('mousemove', handleMouseMove);
                isInside = true;
            } else if (!isNowInside && isInside) {
                document.removeEventListener('mousemove', handleMouseMove);
                isInside = false;
                startInactivityCleanup(); // Очистка при выходе
            }
        }

        document.addEventListener('mousemove', checkPosition);
    }
}

