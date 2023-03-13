document.addEventListener('DOMContentLoaded',()=>{
	pageSelectorMain()
	mainScrollEffect()
})

function pageSelectorMain(){
  const main = document.querySelector('#main')

	if(main.classList.contains('main')){
		visualSetting()	
		mainSwiperEffect()
	}
}

function visualSetting(){
	const vi = document.querySelector('.sec_visual')
	const h = document.querySelector('#header')

	init()
	window.addEventListener('resize',init)

	function init(){
		let wH = window.innerHeight;
		let hH = h.offsetHeight
		gsap.set(vi,{height:wH-hH})
	}
}

function mainSwiperEffect(){
	focusSwiper()
	peopleSwiper()
	newsSwiper()
	listSwiper()
}

function focusSwiper(){
	var swiper = new Swiper('.focus-swiper', {
      slidesPerView: 3, //보여지는 슬라이드 개수
      spaceBetween: 70, //슬라이드 사이 공간
      loop: true,
	  freeMode: false,
      keyboard: {
        enabled: true,  //키보드 제어
      },
      autoplay: {
        delay: 4000, // 4초마다 슬라이드
        disableOnInteraction: false, //버튼 제어시 멈춤
      },
      navigation: { //이전다음버튼 제어
        nextEl: '.focus_next',
        prevEl: '.focus_prev',
      },
	  speed : 1000,
	 breakpoints: {
		  1000: {
            slidesPerView: 1,  //
            spaceBetween: 40, // 
          },
		 
        },
    
    });
}

function peopleSwiper(){
	var swiper = new Swiper('.people-swiper', {
      slidesPerView: 2, //보여지는 슬라이드 개수
      spaceBetween: 140, //슬라이드 사이 공간
      loop: true,
	  freeMode: false,
      keyboard: {
        enabled: true,  //키보드 제어
      },
      autoplay: {
        delay: 5000, // 4초마다 슬라이드
        disableOnInteraction: false, //버튼 제어시 멈춤
      },
      navigation: { //이전다음버튼 제어
        nextEl: '.people_next',
        prevEl: '.people_prev',
      },
	  speed : 1500,
		breakpoints: {
		  1000: {
            slidesPerView: 1,  //
            spaceBetween: 40, // 
          },
		 
        },

    });
}

function newsSwiper(){
	var swiper = new Swiper('.news-swiper', {
      slidesPerView: 3, //보여지는 슬라이드 개수
      spaceBetween: 70, //슬라이드 사이 공간
      loop: true,
	  freeMode: false,
      keyboard: {
        enabled: true,  //키보드 제어
      },
      autoplay: {
        delay: 4000, // 4초마다 슬라이드
        disableOnInteraction: false, //버튼 제어시 멈춤
      },
      navigation: { //이전다음버튼 제어
        nextEl: '.news_next',
        prevEl: '.news_prev',
      },
	  speed : 1500,
	 breakpoints: {
		  1000: {
            slidesPerView: 1,  //
            spaceBetween: 40, // 
          },
		 
        },

    });
}

function listSwiper(){
	var swiper = new Swiper('.list-swiper', {
      slidesPerView: 4, //보여지는 슬라이드 개수
      spaceBetween: 60, //슬라이드 사이 공간
      loop: false,
	  freeMode: true,
      keyboard: {
        enabled: true,  //키보드 제어
      },
      
      navigation: { //이전다음버튼 제어
        nextEl: '.list_next',
        prevEl: '.list_prev',
      },
	  speed : 1000,
	 breakpoints: {
		  1000: {
            slidesPerView: 1,  //
            spaceBetween: 40, // 
          },
		 
        },

    });
}

function mainScrollEffect(){
	const sec = document.querySelectorAll('.text-up')
	
	initEvent()
	function initEvent(){
		window.addEventListener('scroll',aniOpen)
	}
	
	function aniOpen(){
		let txtTrigger = window.scrollY + (window.innerHeight/1.2);
		for(const item of sec){
			if(txtTrigger>(item.getBoundingClientRect().top + window.pageYOffset)){
				item.classList.add('text-up_active')
			}
		}
	}
}
