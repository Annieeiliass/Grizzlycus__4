const timerElement = document.getElementById('timer');
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    function updateTimer() {
      seconds++;
      
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }

      // Обновляем каждую цифру отдельно
      const hh = hours.toString().padStart(2, '0');
      const mm = minutes.toString().padStart(2, '0');
      const ss = seconds.toString().padStart(2, '0');
      
      timerElement.querySelector('.hours-1').textContent = hh[0];
      timerElement.querySelector('.hours-2').textContent = hh[1];
      timerElement.querySelector('.minutes-1').textContent = mm[0];
      timerElement.querySelector('.minutes-2').textContent = mm[1];
      timerElement.querySelector('.seconds-1').textContent = ss[0];
      timerElement.querySelector('.seconds-2').textContent = ss[1];
    }

    setInterval(updateTimer, 1000);