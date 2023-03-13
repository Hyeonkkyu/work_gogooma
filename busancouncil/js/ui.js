$(document).ready(function() {
    "use strict";

    $('.menu').click(function() {
        $('.side_menu').animate({left: '0'})
    });
    $('.close, .swiper-container, .side_menu ul li ul li, .goHome').click(function() {
        $('.side_menu').animate({left: '-400px'});
    });
    $('.side_menu ul li a').click(function() {
        $('.smenu').addclass('.on')
    });

	$('.slides-gallery-wrapper').each(function(index){
		scroll(top);
	});
});

