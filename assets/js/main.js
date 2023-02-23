(function($) {
    "use strict";

    var win = $(window);

    win.on('scroll', function() {
        var sticky__layers = $('.main__header__nav');
        var scroll = win.scrollTop();
        if (scroll < 152) {
            sticky__layers.removeClass('stick_top');
        } else {
            sticky__layers.addClass('stick_top');
        }
    });
    currentSlide();


}(jQuery));

/*=============================================*/

let slideIndex = 0;

function plusSlides(n) {

    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (n >= slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slideIndex += n;
    console.log(slideIndex)
    slideIndex++;



    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "grid";
    // showSlides();

}

function currentSlide() {
    showSlides();
}

function showSlides() {
    // console.log(slideIndex)
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;



    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "grid";
    setTimeout(showSlides, 7000);

}