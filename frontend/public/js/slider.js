import objectData from './slider-data.js';

const sliderContainer = document.getElementById('slider-container');
const slider = document.getElementById('slider');
const buttonLeft = document.getElementById('button-left');
const buttonRight = document.getElementById('button-right');
const activeDescription = document.getElementById('active-description');


const rootStyles = document.documentElement.style;

let slideCounter= 0;
let sliderElements;
let isInTransition= false;
let currentCenterId = window.innerWidth <= 991.98 ? 1 : 2;



function createSliderElements() {
    const sliderContainer = document.querySelector('.slider'); 
    if (!sliderContainer) {
        console.error("Error: No se encontró el elemento con la clase 'slider' en el HTML.");
        return;
    }

    objectData.forEach(sliderobject => {
        const sliderElement = document.createElement('div');
        sliderElement.classList.add('slider-element');
        sliderElement.setAttribute('data-id', sliderobject.countID);
        sliderElement.textContent = sliderobject.name;
        sliderContainer.appendChild(sliderElement);
    });

    sliderElements = Array.from(document.querySelectorAll('.slider-element')); 
}


createSliderElements();





function updateActiveElement() {
    sliderElements.forEach(el => el.classList.remove('active'));
    
    const activeElement = sliderElements.find(el => 
        parseInt(el.getAttribute('data-id')) === currentCenterId
    );
    
    if (activeElement) {
        activeElement.classList.add('active');
        showActiveDescription(activeElement);
    }
}


function showActiveDescription(element) {
    const id = parseInt(element.getAttribute('data-id'), 10);
    const data = objectData.find(obj => obj.countID === id);
    if (data) {
        activeDescription.innerHTML = `
            <p>${data.description}</p>
        `;
    } else {
        activeDescription.innerHTML = '';
    }
}



const DIRECTION = {
    RIGHT: 'RIGHT',
    LEFT: 'LEFT'
};
const getTransformValue = ()=>
    Number (rootStyles.getPropertyValue('--slide-transform').replace('px', ''));


    const reorderSlide = ()=>{
        rootStyles.setProperty('--transition', 'none');
        const transformValue= getTransformValue();
        if (slideCounter === sliderElements.length - 3) {
            slider.appendChild(slider.firstElementChild);
            rootStyles.setProperty(
                '--slide-transform',
                `${transformValue +  (sliderElements[slideCounter].offsetWidth + 10 )}px`
            );
            slideCounter--;
        } 
        else if (slideCounter === 0) {
            slider.prepend(slider.lastElementChild);
            rootStyles.setProperty(
                '--slide-transform',
                `${transformValue -  (sliderElements[slideCounter].offsetWidth + 10 )}px`);
            slideCounter++;
        }
        setTimeout(() => {
            rootStyles.setProperty('--transition', 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)');
            isInTransition = false;
        }, 0);
    };


const moveSlide = (direction)=>{
    if (isInTransition) return;
    const transformValue= getTransformValue();
    rootStyles.setProperty('--transition', 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)');
    isInTransition = true;
    slider.querySelector('.slider-element.active')?.classList.remove('active');
    if(direction===DIRECTION.LEFT){
        rootStyles.setProperty('--slide-transform', `${transformValue +  (sliderElements[slideCounter].offsetWidth + 10 )}px`);
        slideCounter--;
    }
    else if (direction===DIRECTION.RIGHT){
        rootStyles.setProperty('--slide-transform', `${transformValue -  (sliderElements[slideCounter].offsetWidth + 10 ) }px`);
        slideCounter++;
    }

    currentCenterId = direction === DIRECTION.LEFT 
    ? currentCenterId === 1 ? objectData.length : currentCenterId - 1 
    : currentCenterId === objectData.length ? 1 : currentCenterId + 1;
    
    updateActiveElement();
}

buttonLeft.addEventListener('click', ()=>moveSlide(DIRECTION.LEFT))
buttonRight.addEventListener('click', ()=>moveSlide(DIRECTION.RIGHT))

slider.addEventListener(`transitionend`, reorderSlide)
updateActiveElement();
reorderSlide();