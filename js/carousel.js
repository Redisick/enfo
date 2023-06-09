const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-right');
const prevButton = document.querySelector('.carousel-button-left');

const slideWidth = slides[0].getBoundingClientRect().width;
const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;

//arranging slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index +'px';
};
slides.forEach(setSlidePosition);

const initialHideArrows = () => {
    if ((width >= 810 && width < 1100 && slides.length === 2) || 
        (width >= 1100 && slides.length === 4)){
        prevButton.classList.add('is-hidden');
        nextButton.classList.add('is-hidden');
    }
};
initialHideArrows();

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if (width >= 810 && width < 1100 && targetIndex === slides.length - 2){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else if (width >= 1100 && targetIndex === slides.length - 4){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else if (targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
};

//leftButton 
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

//right Button 
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

