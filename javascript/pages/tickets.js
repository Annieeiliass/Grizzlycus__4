// history.scrollRestoration = 'manual'; // Отключает восстановление позиции



const change_sector = document.querySelector('#change_sector')
const selected_sector = document.querySelector('#selected_sector')
const selected_sector_numb = document.querySelector('#selected_sector_numb')

let prevSector = null;

function setColor(sectorName){
    selected_sector.classList.add('show')
    const targetSectors = document.querySelectorAll('.' + sectorName)
    targetSectors.forEach(sector => {
        if(sector.classList.contains('colored')){
            sector.style.fill = '#FF8743'
        }
    })
}

function setSelectedSectorNumb(sectorName){
    const name = sectorName.slice(-3);
    selected_sector_numb.innerHTML = name;
}

function removeColor(sectorName){
    const targetSectors = document.querySelectorAll('.' + sectorName)
    targetSectors.forEach(sector => {
        if(sector.classList.contains('colored')){
            sector.style.fill = ''
        }
    })
}


function onClickSector(e){

    const target = e.target;

    const sectorName = target.classList[0]
    
    if(sectorName){
        
        if(prevSector){
            removeColor(prevSector)
        }
        prevSector = sectorName;
        setSelectedSectorNumb(sectorName)
        setColor(sectorName)
    }
}


change_sector.addEventListener('click', onClickSector)