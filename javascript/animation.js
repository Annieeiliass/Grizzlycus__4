


const slide = [
    {
        framePrefix: 'artist',
        bg: '#EFFF82'
    },
    {
        framePrefix: 'funny',
        bg: '#FF8743'
    },
    {
        framePrefix: 'quirky',
        bg: '#B9B2FD'
    },
    {
        framePrefix: 'wild',
        bg: '#0BA13B'
    },
]



const frameCount = 7; // количество кадров
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

setInterval(nextFrame, 80); // 100мс между кадрами