const leftBtn=document.querySelector('.left');
const rightBtn=document.querySelector('.right');
const slider=document.querySelector('.slider');
const images = document.querySelectorAll('.image');
let slideNo = 1;
const length = images.length;

// for bottom 
const bottom = document.querySelector('.bottom');

for(let i=0; i<length; i++){
    const div = document.createElement('div');
    div.className = 'btn';
    bottom.appendChild(div);
}

const btns = document.querySelectorAll('.btn');

btns[0].style.backgroundColor = 'white';

const resetBg = ()=>{
    btns.forEach((btn)=>{
        btn.style.backgroundColor = 'transparent';
        btn.addEventListener('mouseover',stopSlideShow);
        btn.addEventListener('mouseout',startSlideShow);
    });
};
btns.forEach((btn, i)=>{
    btn.addEventListener('click',()=>{
        resetBg();
        slider.style.transform = `translateX(-${i*800}px)`;
        slideNo = i+1;
        btn.style.backgroundColor ='white';
    });
});

const changeColor= ()=>{
    resetBg();
    btns[slideNo-1].style.backgroundColor = 'white';
};

//for -- slide 
const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNo * 800}px)`;
    slideNo++;
}

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNo-2) * 800}px)`;
    slideNo--;
}
const getFirstSlide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNo = 1;
}

const getlastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*800}px`;
    slideNo = length;
}


rightBtn.addEventListener('click',()=>{
    slideNo < length ? nextSlide() : getFirstSlide();
    changeColor();
    });

leftBtn.addEventListener('click',()=>{
    slideNo > 1 ? prevSlide():getlastSlide();
    changeColor();
});

// start auto slider

let slideInterval;

const startSlideShow = ()=>{
    slideInterval = setInterval(()=>{
        slideNo < length ? nextSlide() : getFirstSlide();
        changeColor();
    },2000);
};

const stopSlideShow = ()=>{
    clearInterval(slideInterval);
};


startSlideShow();
slider.addEventListener('mouseover',stopSlideShow);
slider.addEventListener('mouseout',startSlideShow);
rightBtn.addEventListener('mouseover',stopSlideShow);
rightBtn.addEventListener('mouseout',startSlideShow);
leftBtn.addEventListener('mouseover',stopSlideShow);
leftBtn.addEventListener('mouseout',startSlideShow);

