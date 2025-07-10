
history.scrollRestoration = 'manual'; // Отключает восстановление позиции

// рисование картинками на главной странце
    const photos = [
        './images/photo-container/1.png',
        './images/photo-container/2.png',
        './images/photo-container/3.png',
        './images/photo-container/4.png',
        './images/photo-container/5.png',
        './images/photo-container/6.png',
        './images/photo-container/7.png',
        './images/photo-container/8.png',
        './images/photo-container/9.png',
        './images/photo-container/10.png',
        './images/photo-container/11.png',
        './images/photo-container/12.png',
        './images/photo-container/13.png',
        './images/photo-container/14.png',
        './images/photo-container/15.png',
        './images/photo-container/16.png',
        './images/photo-container/17.png',
        './images/photo-container/18.png',
        './images/photo-container/19.png',
        './images/photo-container/20.png',
        './images/photo-container/21.png',
        './images/photo-container/22.png',
        './images/photo-container/23.png',
        './images/photo-container/24.png',
        './images/photo-container/25.png',
        './images/photo-container/26.png',
    ];

    const photoContainer = document.querySelector('.main');

    function checkSize(){
        if(window.innerWidth < 450){
        }
        else{
            getPhotoContainer(photoContainer)()
           
            setCursor('.block1', './images/cursors/poster_cursor.png')
            setCursor('.block2', './images/cursors/artist_cursor.png')
            setCursor('.block3', './images/cursors/merch_cursor.png')
            setCursor('.block4', './images/cursors/tickets_cursor.png')

        }
    }

    checkSize()
    
//



// прокрутка страницы при фиксированном блоке
    const block1 = document.querySelector('.block1');
    const block2 = document.querySelector('.block2');
    const block3 = document.querySelector('.block3');
    const block4 = document.querySelector('.block4');
    const headerBlocks = {
        'block1': 'poster',
        'block2': 'artists',
        'block3': 'shop',
        'block4': 'tickets',
    }

    const callback = (text_fixed, target, ind) => {
        const className = target.className.split(' ')[1]
        const title = headerBlocks[className]
        if(title){
            text_fixed.firstElementChild.src = './images/titles/' + title + '.png'
        }
    }

    fixedObserver([block1, block2, block3, block4], headerBlocks, callback)
//

// боковая навигация
    const a_1 = document.querySelector('#a_1')
    const poster = document.querySelector('.block1')
    const a_2 = document.querySelector('#a_2')
    const artist = document.querySelector('.block2')
    const a_3 = document.querySelector('#a_3')
    const merch = document.querySelector('.block3')
    const a_4 = document.querySelector('#a_4')
    const tickets = document.querySelector('.block4')

    RightNav([[a_1, poster], [a_2, artist], [a_3, merch], [a_4, tickets]])
//





AnimationMain()
