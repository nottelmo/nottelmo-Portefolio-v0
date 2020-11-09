if (window.innerWidth <= 768) {

    // GET GALLERY FIGURE AND IMAGE BY CLASS
    let galleryFigure = document.querySelector(".gallery__figure");
    let galleryImgs = document.querySelectorAll(".gallery__img");

    // FUNCTION TO SET GALLERY IMG HEIGHT EQUAL TO THE FIGURE WIDTH
    function setFigureHeight() {
        galleryImgs.forEach(img => {
            img.style.height = getComputedStyle(galleryFigure).width;
        });
    }

    //RUN FUNCTION ONCE
    setFigureHeight();

    // CHANGE SIZE WHEN WINDOW SIZE OR ORIENTATION CHANGES
    window.addEventListener("resize", function () {
        setFigureHeight();
    });
    window.onorientationchange = function () {
        setFigureHeight();
    };

}