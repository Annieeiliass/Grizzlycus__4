const frameCount = 10; // количество кадров
const framePrefix = 'frame'; // название файлов
let currentFrame = 1;
const frameImg = document.getElementById('frame');

function nextFrame() {
  currentFrame++;
  if (currentFrame > frameCount) {
    currentFrame = 1; // если нужно зациклить
    // или return; если нужно остановить
  }
  frameImg.src = './images/animation/' + `${framePrefix}${currentFrame}.png`;
}

setInterval(nextFrame, 60); // 100мс между кадрами