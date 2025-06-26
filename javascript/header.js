const titles = [
    {
        title: 'Афиша',
        background: '#B9B2FD'
    },
    {
        title: 'Артисты',
        background: '#0BA13B'
    },
    {
        title: 'Магазин',
        background: '#EFFF82'
    },
    {
        title: 'О нас',
        background: '#F3F3EF'
    },
    {
        title: 'Билеты',
        background: '#FF8743'
    }
]

const header = document.querySelector('.menu')
const headers = document.querySelectorAll('.menu a')
const main_wrapper_bg = document.querySelector('.main_wrapper')

function onEnter(e){
    const text = e.target.innerText;
    const target = titles.find(t => t.title === text)
    if(target){
        main_wrapper_bg.style.backgroundColor = target.background;
    }
}   

function onLeave(e){
    main_wrapper_bg.style.backgroundColor = '';
}

header.addEventListener('mouseleave', onLeave)
headers.forEach(h => h.addEventListener('mouseenter', onEnter))

const logo_header = document.querySelector('.logo')

logo_header.addEventListener('mouseenter', () => {
    const styles = window.getComputedStyle(main_wrapper_bg);
    const bgColor = styles.backgroundColor;
    logo_header.firstElementChild.lastElementChild.style.fill = bgColor;
})

logo_header.addEventListener('mouseleave', () => {
    logo_header.firstElementChild.lastElementChild.style.fill = '#000000';
})