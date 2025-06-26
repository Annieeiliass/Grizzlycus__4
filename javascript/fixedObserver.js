

function fixedObserver(blocks, headerBlocks, callback, callbackHidden = () => {}, threshold=1){
    const text_fixed = document.querySelector('.text_fixed');
    const observer = new IntersectionObserver(
        (entries) => {
            console.log(entries)
            entries.forEach((entry, ind) => {
                if (entry.isIntersecting) {
                    callback(text_fixed, entry.target, ind)
                } else {
                    callbackHidden(text_fixed, entry.target, ind)
                }
            });
        },
        {
            threshold
        }
    );

    blocks.forEach(block => {
        observer.observe(block);
    })

    // function checkElementPosition(element) {
    //     const rect = element.getBoundingClientRect();
    //     const scrollPosition = window.scrollY;
        
    //     // Верхняя и нижняя границы элемента в контексте всей страницы
    //     const elementTop = scrollPosition + rect.top;
        
    //     if (scrollPosition < elementTop) {
    //         return 1;
    //     } else{
    //         return 0
    //     }
    // }
    
    // if(checkElementPosition(blocks[0])){
    //     text_fixed.innerHTML = headerBlocks['block1'];
    // }
    // if(!checkElementPosition(blocks.at(-1))){
    //     text_fixed.innerHTML = headerBlocks['block' + blocks.length];
    // }
}



