
function toggleFigcaption(e){
    if(window.innerWidth < 768){
        // e.children[1].classList.toggle("animate__fadeOutUp");
    e.children[1].classList.toggle("animate__fadeInTop");
    
    e.classList.toggle("gallery__figure--closed");
    e.classList.toggle("gallery__figure--open");

    e.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }    
    
}