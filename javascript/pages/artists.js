history.scrollRestoration = 'manual'; // Отключает восстановление позиции





function checkSize(){
    if(window.innerWidth < 450){
    }
    else{
        setCursor('#grizzlycus_link', '../images/cursors/watch_cursor.png')
        setCursor('#bear_funny', '../images/cursors/watch_cursor.png')
    }
}

checkSize()

const slide = {
    framePrefix: 'artists', 
    frameCount: 4
}

AnimationTitle(slide)