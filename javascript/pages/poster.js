history.scrollRestoration = 'manual'; // Отключает восстановление позиции

// боковая навигация
    const a_1 = document.querySelector('#a_1')
    const block1 = document.querySelector('.block1')
    const a_2 = document.querySelector('#a_2')
    const block2 = document.querySelector('.block2')
    const a_3 = document.querySelector('#a_3')
    const block3 = document.querySelector('.block3')
    const a_4 = document.querySelector('#a_4')
    const block4 = document.querySelector('.block4')
    const a_5 = document.querySelector('#a_5')
    const block5 = document.querySelector('.block5')
    const a_6 = document.querySelector('#a_6')
    const block6 = document.querySelector('.block6')

   
    function checkSize(){
        if(window.innerWidth < 450){
        }
        else{
            RightNav([[a_1, block1], [a_2, block2], [a_3, block3], [a_4, block4], [a_5, block5], [a_6, block6]])
        }
    }

    checkSize()

//


// прокрутка страницы при фиксированном блоке
   
    const headerBlocks = {
        'block1': {title: 'Мастер-классы', sign: 'Хотите научиться жонглировать шишками или ходить по канату, как настоящий цирковой медведь? Наши мастер-классы — это море веселья, а главное, никто не уйдёт без нового навыка!'},
        'block2': {title: 'Вечеринки', sign: 'Танцы до утра, медвежьи объятия и конкурсы, после которых смеются даже суровые бурые мишки! Наши вечеринки — это адреналин, смех и немного хаоса.'},
        'block3': {title: 'Лекции', sign: 'Узнайте, почему медведи не впадают в спячку от скуки и чем угощать гостей, если они нагрянули к вам! Наши лекторы знают всё… или делают вид.'},
        'block4': {title: 'Реклама', sign: 'Ярче полярного сияния, громче рыка гризли — наша реклама. Врежется в вашу память, как медведь в кусты малины!'},
        'block5': {title: 'Туры', sign: 'От таёжных приключений до цирковых гастролей — наши туры такие насыщенные, что после них вам понадобится… ну, настоящая медвежья спячка!'},
        'block6': {title: 'Концерты', sign: 'Медвежий рок, топот лап вместо ударных и вокал, от которого дрожат деревья! Это не концерт — это лесной джем-сейшн! '},
    }

    const numb_fixed = document.getElementById('numb_fixed')
    const title_fixed = document.getElementById('title_fixed')
    const sign_fixed = document.getElementById('sign_fixed')

    const callback = (text_fixed, target, ind) => {
        const className = target.className.split(' ')[1]
        const title = headerBlocks[className]
        if(title){
            numb_fixed.innerHTML = className.slice(5).padStart(2, '0')
            title_fixed.innerHTML = title.title;
            sign_fixed.innerHTML = title.sign;
            text_fixed.classList.add('show')
        }
    }
    const callbackHidden = (text_fixed, target, ind) => {

        const className = target.className.split(' ')[1]
        const title = headerBlocks[className]
        if(title){
            text_fixed.classList.remove('show')
            text_fixed.classList.add('remove')
            setTimeout(() => {text_fixed.classList.remove('remove')}, 250)
        }
    }


    fixedObserver([block1, block2, block3, block4, block5, block6], headerBlocks, callback, callbackHidden, 0)
//


const slide = {
    framePrefix: 'poster', 
    frameCount: 4
}

AnimationTitle(slide)