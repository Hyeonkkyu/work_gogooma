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
        dots: false,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: false,
    });

    // $('#coverPage').ready(function(){
    //     $('.coverImg').addClass('.on');
    //     return false;
    //   })
    // $('.gnb>ul').hover(function () {
    //     $('.gnb').addClass('hover')
    //     $('.smenu').addClass('on')
    // },
    //     () => {
    //         $('.gnb').removeClass('hover')
    //         $('.smenu').removeClass('on')
    //     })
})