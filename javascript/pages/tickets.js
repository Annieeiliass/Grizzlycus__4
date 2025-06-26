history.scrollRestoration = 'manual'; // Отключает восстановление позиции

const error_span = document.querySelector('#error') 

function setError(err){
    error_span.innerHTML = err;
    errorMessage = err;
}

function removeError(){
    error_span.innerHTML = ''
    errorMessage = ''
}

let errorMessage = ''
class User{
    sector
    name
    email
    phone
    show
    countTickets
    selected

    constructor(){
        this.selected = false;
        this.countTickets = 1;
        this.email = ''
        this.phone = ''
        this.name = ''
        this.sector = ''
        this.show = 'Шоу «Диско-мишки»'
    }
}
const user = new User()



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
    const name = sectorName.slice(-3)
    user.sector = name;
    removeError()
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


// скролл до формы
document.querySelector('.button_a').addEventListener('click', function() {
    const formElement = document.getElementById('form');
    const formPosition = formElement.getBoundingClientRect().top + window.scrollY;
    
    window.scrollTo({
        top: formPosition - 50, // на 50px выше формы
        behavior: 'smooth'
    });
});

// счетчик билетов
document.querySelectorAll('.counter-btn').forEach(button => {
  button.addEventListener('click', function() {
    const tickets_numb = document.querySelector('#tickets_numb');
    let value = parseInt(tickets_numb.innerHTML);
    
    if (this.classList.contains('minus') && value > 1) {
        tickets_numb.innerHTML = value - 1;
        user.countTickets = value - 1;
        removeError()
    } else if (this.classList.contains('plus') && value < 9) {
        tickets_numb.innerHTML = value + 1;
        user.countTickets = value + 1;
        removeError()
    }
  });
});

const circle_form = document.querySelector('.circle_form')
let selected_form = false;
document.querySelector('.form-group.checkbox-group').addEventListener('mousedown', e => {
    e.preventDefault()
    if(selected_form){
        selected_form = false;
        user.selected = false;
        removeError()
        circle_form.classList.remove('selected')
    }
    else{
        selected_form = true;
        user.selected = true;
        removeError()
        circle_form.classList.add('selected')
    }
})


document.querySelector('.form-input.name').addEventListener('input', e => {
    user.name = e.target.value;
    removeError()
})
document.querySelector('.form-input.email').addEventListener('input', e => {
    user.email = e.target.value;
    removeError()
})
document.querySelector('.form-input.phone').addEventListener('input', e => {
    user.phone = e.target.value;
    removeError()
})


const selectElement = document.querySelector('.form-select');
selectElement.addEventListener('change', (event) => {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    user.show = selectedText;
    removeError()
});

const buy = document.querySelector('#buy')

function checkForm(){
    if(!user.countTickets){
        errorMessage = 'Не указано кол-во билетов'
        return false
    }
    if(!user.email){
        errorMessage = 'Не указан E-mail'
        return false
    }
    if(!user.name){
        errorMessage = 'Не указано имя'
        return false
    }
    if(!user.phone){
        errorMessage = 'Не указан телефон'
        return false
    }
    if(!user.sector){
        errorMessage = 'Не указан сектор'
        return false
    }
    if(!user.selected){
        errorMessage = 'Нет согласия на обработку данных'
        return false
    }
    if(!user.show){
        errorMessage = 'Не указано шоу'
        return false
    }
    return true
}
const modal = document.querySelector('.modal')
buy.addEventListener('click', e => {
    if(checkForm()){
        modal.classList.add('show')
        setTimeout(() => modal.classList.remove('show'), 4000)
    }
    else{
        error_span.innerHTML = errorMessage;
    }
})