$(function () {

    $('.newsSlider').slick({
        dots: true,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
    });

    $('.issueSlider').slick({
        dots: true,
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
    });

})