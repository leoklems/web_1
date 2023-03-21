$(document).ready(function() {
    $("#main__menu__btn").click(function(event) {
        event.preventDefault();
        $('.main__menu').toggleClass('main__menu__trigger');
        $('.fa-list').toggleClass('fa-times');
        // $('.hm__menu__btn').toggleClass('hm__menu__btn__trig');

    })
    $("#courses__nav__out").click(function(event) {
        event.preventDefault();
        $('.course__nav__items').toggleClass('course__nav__items__triggered');
        $('#hm_nav_cat_outs').toggleClass('menu_triggered');
    })

    //    $(".hm_nav_cat").click(function(event) {
    //        // event.preventDefault();
    //        // controling the contact us menu button link
    //        $('.hm_nav_cat').removeClass('hm_nav_cat_triggered');
    //        $('.hm__nav').toggleClass('hm__nav__triggered');
    //        // $('.fa-arrow-right').toggleClass('fa-arrow-down');
    //
    //    })
    currentSlide();
});

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
    // currentSlide();


}(jQuery));

/*=============================================*/

var slideIndex = 0;

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