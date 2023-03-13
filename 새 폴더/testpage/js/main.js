$(function () {

    $('.newsSlider').slick({
        dots: true,
        slidesToShow: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
    });

    $('.issueSlider').slick({
        dots: true,
        slidesToShow: 3,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
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