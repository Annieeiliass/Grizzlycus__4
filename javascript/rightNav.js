
function RightNav(blocks){
  const panel_rightNav = document.getElementById('panel_rightNav')
  const rightNav = document.querySelector('.rightNav')
  
  function scrollToCenter(element) {
    const viewportHeight = window.innerHeight;
    const elementRect = element.getBoundingClientRect();
    const scrollY = window.scrollY || window.pageYOffset;
    
    const targetScroll = scrollY + elementRect.top - (viewportHeight / 2) + (elementRect.height / 2);
    
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth"
    });
  }

  blocks.forEach(block => {
    block[0].addEventListener('click', () => scrollToCenter(block[1]))
  });
  
  panel_rightNav.addEventListener('mouseenter', () => {
    rightNav.classList.add('show')
  })
  
  rightNav.addEventListener('mouseleave', () => {
      rightNav.classList.remove('show')
  })
}
