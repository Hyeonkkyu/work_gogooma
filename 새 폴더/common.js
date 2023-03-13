document.addEventListener('DOMContentLoaded',()=>{
	includeEffect()
} )

function includeEffect(){
	headerInclude()
	footerInclude()
	//Include()
	
}

function headerInclude(){
	$main = $('#main');
	$main.prepend(
'	<header id="header" class="header" >'+
'		<div class="header_wrap">'+
'			<div class="header_inner">'+
'				<ul class="header_list">'+
'					<li><p class="date">2023 March Vol. 331</p></li>'+
'					<li>'+
'						<h1 class="logo-top">'+
'							<a href="../main/index.html">'+
'								<img id="logo_img" src="../images/common/logo.svg" alt="강남라이프 로고" />'+
'								<!-- <ul class="logo_list">'+
'									<li>강남라이프</li>'+
'								</ul> -->'+
'							</a>'+
'						</h1>'+
'					</li>'+
'					<li>'+
'						<div class="headSearch">'+
'							<form class="searchArea" action="../sub/search.html">'+
'								<div class="tipue_search_group search">'+
'									<input type="text" name="q" id="tipue_search_input" pattern=".{2,}" title="최소 2글자 이상" required="" placeholder="검색어를 입력하세요.">'+
'									<button type="submit" class="tipue_search_button">'+
'										<img src="../images/common/search_icon.png" alt="" class="tipue_search_icon">'+
'									</button>'+
'								</div>'+
'							</form>'+
'						</div>'+
'					</li>'+
'				</ul>'+
'				<ul class="header_m"><!-- mobile size ------------------------------------------------------------------------>'+
'					<li>'+
'						<div class="menu-bar_wrap">'+
'							<ul class="menu-bar">'+
'								<li class="bar1"></li>'+
'								<li class="bar2"></li>'+
'							</ul>'+
'						</div>'+
'					</li>'+
'					<li class="logo_m">'+
'						<h1 >'+
'							<a href="../main/index.html">'+
'								<img src="../images/common/logo.svg" alt="강남라이프 로고" />'+
'								<!-- <ul class="logo_list">'+
'									<li>강남라이프</li>'+
'								</ul> -->'+
'							</a>'+
'						</h1>'+
'					</li>'+
'					<li>'+
'						<button type="submit" class="tipue_search_button m_search">'+
'							<img src="../images/common/search_icon.png" alt="" class="tipue_search_icon">'+
'						</button>'+
'					</li>'+
'				</ul>'+
'				<div class="mobile_search">'+
'					<ul class="ms_close">'+
'						<li></li>'+
'						<li></li>'+
'					</ul>'+
'					<form class="searchArea" action="../sub/search.html">'+
'						<div class="tipue_search_group search">'+
'							<input type="text" name="q" id="tipue_search_input" pattern=".{2,}" title="최소 2글자 이상" required="" placeholder="검색어를 입력하세요.">'+
'							<button type="submit" class="tipue_search_button">'+
'								<img src="../images/common/search_icon.png" alt="" class="tipue_search_icon">'+
'							</button>'+
'						</div>'+
'					</form>'+
'				</div>'+
'				<!-- mobile size end------------------------------------------------------------------------------------->'+
'			</div>'+
'		</div>'+
'		<div class="header_wrap fix-header">'+
'			<div class="header_inner ">'+
'				<nav class="mainmenu_wrap">'+
'					<h1 class="logo-hidden">'+
'							<a href="../main/index.html"><img src="../images/common/logo.svg" alt="" /></a>'+
'					</h1>'+
'					<div class="headSearch past-hidden">'+
'						<form class="searchArea" action="../sub/search.html">'+
'							<div class="tipue_search_group search">'+
'								<input type="text" name="q" id="tipue_search_input" pattern=".{2,}" title="최소 2글자 이상" required="" placeholder="검색어를 입력하세요.">'+
'								<button type="submit" class="tipue_search_button">'+
'									<img src="../images/common/search_icon.png" alt="" class="tipue_search_icon">'+
'								</button>'+
'							</div>'+
'						</form>'+
'					</div>'+
'					<ul class="mainmenu_list">'+
'						<li>'+
'							<span>강남라이프의 이모저모</span>'+
'								'+
'						</li>'+
'						<li>'+
'							<span>강남 생활의 모든 것</span>'+
'							'+
'						</li>'+
'					</ul>'+
'				</nav>'+
'					<div class="submenu_wrap">'+
'						<ul class="two-depth">'+
'							<li><a href="../sub/photo.html">강남 + 사진관</a></li>'+
'							<li><a href="../sub/dream1.html">강남 Dream 드림</a></li>'+
'							<li><a href="../sub/focus.html">포커스 인</a></li>'+
'							<li><a href="../sub/happy.html">행복한 동화</a></li>'+
'							<li><a href="../sub/class.html">강남 클라쓰</a></li>'+
'							<li><a href="../sub/trendy.html">트렌디 강남</a></li>'+
'							<li><a href="../sub/shine.html">빛나는 당신</a></li>'+
'							<li><a href="../sub/gogangnam.html">강남에 가면</a></li>'+
'						</ul>'+
'						<ul class="two-depth">'+
'							<li><a href="../sub/school.html">강남 스쿨</a></li>'+
'							<li><a href="../sub/news.html">명예기자 뉴스</a></li>'+
'							<li><a href="../sub/culture.html">문화가 산책</a></li>'+
'							<li><a href="../sub/now.html">구의회는 지금</a></li>'+
'							<li><a href="../sub/briefing.html">강남 브리핑</a></li>'+
'							<li><a href="../sub/webtoon.html">G-웹툰</a></li>'+
'							<li><a href="../sub/reader.html">독자와의 만남</a></li>'+
'							<li><a href="../sub/cover.html">희망온돌 따뜻한 겨울나기</a></li>'+
'						</ul>'+
'					</div>'+
'			</div>'+
'		</div>'+
'	</header> '+
'	<div class="accordion">'+
'		<nav class="mainmenu_wrap_m">'+
'			<ul class="mainmenu_list_m">'+
'				<li>'+
'					<p>강남라이프의 이모저모</p>'+
'					<ul class="two-depth_m">'+
'						<li>'+
'							<a href="../sub/photo.html">'+
'								<span>강남 + 사진관</span>'+
'								<p>재건축 Dream 강남구가 도와줄게</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/dream1.html">'+
'								<span>강남 Dream 드림</span>'+
'								<p>재건축 Dream 강남구가 도와줄게</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/focus.html">'+
'								<span>포커스 인</span>'+
'								<p>민원 처리, 현장에서 척척</p>'+
'								<p>- 비전 보고회 개최, 구민 의견 경청 -</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/happy.html">'+
'								<span>행복한 동화</span>'+
'								<p>창작동화 《소원을 들어드립니다, 달떡연구소》</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/class.html">'+
'								<span>강남 클라쓰</span>'+
'								<p>카드지갑 만들기 원데이 클래스</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/trendy.html">'+
'								<span>트렌디 강남</span>'+
'								<p>새로운 소비 형태가 찾아온다</p>'+
'								<p>체리슈머 (Cherry-sumers)</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/shine.html">'+
'								<span>빛나는 당신</span>'+
'								<p>꿈을 굽는 명장</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/gogangnam.html">'+
'								<span>강남에 가면</span>'+
'								<p>‘복고’ 인기 속 우리 동네에서 만나는 레트로</p>'+
'							</a>'+
'						</li>'+
'					</ul>'+
'				</li>'+
'				<li>'+
'					<p>강남 생활의 모든 것</p>'+
'					<ul class="two-depth_m">'+
'						<li>'+
'							<a href="../sub/school.html">'+
'								<span>강남 스쿨</span>'+
'								<p>그림책 동아리 ‘엄마의 온도’</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/news.html">'+
'								<span>명예기자 뉴스</span>'+
'								<p>수고했어요, 봄이 또 오네요</p>'+
'								<p>주민센터 요가 프로그램을 추천합니다!</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/culture.html">'+
'								<span>문화가 산책</span>'+
'								<p>3월 강남 문화 달력, 이달의 도서</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/now.html">'+
'								<span>구의회는 지금</span>'+
'								<p>제308회 제2차 정례회 폐회 중 운영위원회 제3차 회의 개최 외</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/briefing.html">'+
'								<span>강남 브리핑 </span>'+
'								<p>구룡마을 화재 이재민 지원에 동참해 주신</p>'+
'								<p>구민 여러분께 감사드립니다</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/webtoon.html">'+
'								<span>G-웹툰  </span>'+
'								<p>#공무원썰툰 7화 - #강남구헬스체크업</p>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/reader.html">'+
'								<span>독자와의 만남</span>'+
'							</a>'+
'						</li>'+
'						<li>'+
'							<a href="../sub/cover.html">'+
'								<span>2023 희망온돌 따뜻한 겨울나기</span>'+
'							</a>'+
'						</li>'+
'					</ul>'+
'				</li>'+
'			</ul>'+
'		</nav>'+
'	</div>'

	);

}
function footerInclude(){
	$main = $('#main');
	$main.append(
		'<footer id="footer" class="footer">'+
		'<div class="footer_inner">'+
		'	<ul class="footer_list">'+
		'		<li class="footer-logo">'+
		'			<a href="https://www.gangnam.go.kr/" target="_blank"><img src="../images/common/footer_logo.png" alt="" /></a>'+
		'			<div class="footer-info_m">'+
		'				<ul class="footer-info">'+
		'					<li><strong>발행일</strong> <span class="fo_Lato">2023</span>년 <span class="fo_Lato">03</span>월 <span class="fo_Lato">02</span>일</li>'+
		'					<li><strong>발행인</strong> 강남구청장 조성명</li>	'+
		'					<li><strong>편집인</strong> 정책홍보실장</li>'+
		'					<li><strong>전화</strong> <span class="fo_Lato"><a href="tel:0234235094">02-3423-5094</a></li>'+
		'					<li><strong>주소</strong> 06090 서울시 강남구 학동로 426(삼성동, 강남구청)</li>'+
		'					<li><strong>홈페이지</strong><a href="https://www.gangnam.go.kr/" target="_blank">www.gangnam.go.kr</a></li>'+
		'				</ul>'+
		'			</div>'+
		'		</li>'+
		'		<li class="footer-sns_wrap">'+
		'			<!-- <ul class="footer-sns_list">'+
		'				<li><a href="#redirect"><img src="../images/common/ft-ka.png" alt="강남라이프 카카오톡" /></a></li>'+
		'				<li><a href="#redirect"><img src="../images/common/ft-fb.png" alt="강남라이프 페이스북" /></a></li>'+
		'				<li><a href="#redirect"><img src="../images/common/ft-bl.png" alt="강남라이프 네이버블로그" /></a></li>'+
		'				<li><a href="#redirect"><img src="../images/common/ft-tw.png" alt="강남라이프 트위터" /></a></li>'+
		'			</ul> -->'+
		'			<div class="footer-btn">'+
		'				<button class="subc-btn">'+
		'					<a href="https://www.gangnam.go.kr/apply/gangnamlife_sub/newest/view.do?mid=ID01_030206" target="_blank">구독 신청</a>'+
		'				</button>'+
		'			</div>'+
		'		</li>'+
		'		<p class="footer-copy_m">© COPYRIGHT 2023 GANGNAM-GU OFFICE. <br/>ALL RIGHTS RESERVED.</p>'+
		'	</ul>'+
		'	<div class="footer-info_wrap">'+
		'		<ul class="footer-info">'+
		'			<li><strong>발행일</strong> <span class="fo_Lato">2023</span>년 <span class="fo_Lato">3</span>월 <span class="fo_Lato">2</span>일</li>'+
		'			<li><strong>발행인</strong> 강남구청장 조성명</li>				'+
		'			<li><strong>편집인</strong> 정책홍보실장</li>'+
		'			<li class="enter"></li>'+
		'			<li><strong>전화</strong> <span class="fo_Lato"><a href="tel:0234235094">02-3423-5094</a></span></li>'+
		'			<li><strong>주소</strong> <span class="fo_Lato">06090 서울시 강남구 학동로 426(삼성동, 강남구청)</span></li>'+
		'			<li><strong>홈페이지</strong><a href="https://www.gangnam.go.kr/" target="_blank">www.gangnam.go.kr</a></li>'+
		'			</ul>'+
		'			<span>© COPYRIGHT 2023 GANGNAM-GU OFFICE. ALL RIGHTS RESERVED.</span>'+
		'		</div>'+
		'	</div>'+
		'</footer>'
	);
}


window.addEventListener('load',()=>{
	const main = document.querySelector('#main')
	if(main.classList.contains('main')){
		logoChangeEffect()
	}
	headerScrollEffect()
	onlyPcMain()
	mobileMenuShowHideEffect()
})
function logoChangeEffect(){
	document.getElementById("logo_img").src = "../images/common/logo_s.svg";
}
function onlyPcMain(){
	init()
	window.addEventListener('resize',init)
	
	function init(){
		let wW = window.innerWidth
		if(wW>1000){
			mainMenuShowHideEffect()
		}else
		if(wW<1000){
			mobileSearchShowHideEffect()
		}
	}
}

function headerScrollEffect(){	
	const fH = document.querySelector('.fix-header')
	const logo = document.querySelector('.logo-hidden')
	const search = document.querySelector('.search-hidden')
	const past = document.querySelector('.past-hidden')
	//let fH_sH = fH.offsetTop;
	let fH_sH = 126;
	let wSH
	
	initEvent()

	function initEvent(){
		window.addEventListener('scroll',headerScrollEvent)
	}

	function headerScrollEvent(){
		wSH = window.pageYOffset
		if(wSH>=fH_sH){
			gsap.set(fH,{ position:'fixed', top:0, left:0 } )
			logo.classList.add('fixed')
			
			past.classList.add('fixed')
		}else
		if(wSH<fH_sH){
			gsap.set(fH,{ position:'relative', top:0, left:0 } )	
			logo.classList.remove('fixed')
			
			past.classList.remove('fixed')
		}
	}
}

function mainMenuShowHideEffect(){
	const depth1 = document.querySelector('.mainmenu_list')
	const depth1Li = document.querySelectorAll('.mainmenu_list > li')
	const depth2 = document.querySelectorAll('.two-depth')
	const sw = document.querySelector('.submenu_wrap')

	let showSubmenu=null;
	let selectedMenuNum=null;
	let selectedMenu=null;
	initEvent()

	function initEvent(){
		for(const item of depth1Li){
			item.addEventListener('mouseenter',showMenu)
		}
		
			sw.addEventListener('mouseleave',removeMenu)
			depth2[0].addEventListener('mouseenter',()=>{depth1Li[0].classList.add('selected')})
			depth2[0].addEventListener('mouseleave',()=>{depth1Li[0].classList.remove('selected')})
			depth2[1].addEventListener('mouseenter',()=>{depth1Li[1].classList.add('selected')})
			depth2[1].addEventListener('mouseleave',()=>{depth1Li[1].classList.remove('selected')})
	}

	function showMenu(){
		selectedMenuNum=getIndex(this)
        depth2Activate(selectedMenuNum)
        depth2Show(selectedMenuNum)
	}

	function getIndex(checkMenu){
    	let selectedIndex=0
    	while((checkMenu=checkMenu.previousElementSibling)!=null){
    		selectedIndex++
    	}
    	return selectedIndex;
    }
	function depth2Activate(num){

    	if(selectedMenu!=depth1Li[num]){
			if(selectedMenu!=null){
				for(const i of depth1Li){
					i.classList.remove('selected')
				}
			}
    		selectedMenu=depth1Li[num]
    	}
    }
	function depth2Show(num){
    	//gsap.set(depth2,{display:"none"})
    	gsap.set(sw,{display:"flex"})
		selectedMenu.classList.add('selected')
    }
	function removeMenu(){
    	gsap.set(sw,{display:"none"})
		for(const i of depth1Li){
			i.classList.remove('selected')
			console.log('test')
		}
    }
}

function mobileMenuShowHideEffect(){
	const body = document.querySelector('body')
	const menuBtn = document.querySelector('.menu-bar')
	const h = document.querySelector('.header_wrap')
	const acc = document.querySelector('.accordion')
	const depth1=document.querySelectorAll('.mainmenu_list_m>li>p')
	const depth2=document.querySelectorAll('.depth2_m>li>a')

	let open = false;
	let openH
	let closeH = 40;
	let selectedMenu;
	let d2Open=false;
	
	
	init()
	initEvent()
	
	function init(){
		accSetting()
		window.addEventListener('resize',accSetting)
	}
	
	function accSetting(){
		let wH = window.innerHeight;
		let wW = window.innerWidth
		let hH = h.offsetHeight;
		gsap.set(acc,{ height:(wH - hH),top:hH})
		if(wW>1000){
			gsap.set(acc,{display:'none'})
		}
		//gsap.set(body,{ overflow:'hidden' })
	}

	function initEvent(){
		menuBtn.addEventListener('click',mobileMenuShowHide)
		for(const item of depth1){
		item.addEventListener('click',d1Click)
	}
		for(const item of depth2){
			item.addEventListener('click',d2Click)
		}
	}
	
	function mobileMenuShowHide(){
		console.log(open)
		menuBtn.classList.toggle('toggle')
		if(open==false){
			mobileMenuShow()
		}else
		if(open==true){
			mobileMenuHide()
		}
	}
	function mobileMenuShow(){
		gsap.set(acc,{display:"block"})
		gsap.to(acc,{left:0,duration:0.1})
		gsap.set(body,{overflow:"hidden"})
		open=true
	}
	function mobileMenuHide(){
		gsap.to(acc,{left:-100+"%",duration:0.1,onComplete:()=>{
			gsap.set(acc,{display:"none"})
		}})
		gsap.set(body,{overflow:"auto"})
		open=false
	}

	function d1Click(){
		menuInActivate(this);
		menuActivate(this);
	}
	function menuInActivate(clickMenu) {
		if(d2Open==true){
			d2Open=false
			if (selectedMenu != null && selectedMenu!=clickMenu){
				gsap.to(selectedMenu.parentElement, {height:closeH, duration:.2, ease:'power1.out'}) 
			}else
			if(selectedMenu != null && selectedMenu==clickMenu){
				gsap.to(selectedMenu.parentElement, {height:closeH, duration:.2, ease:'power1.out'})
				selectedMenu=1
			}
		}
	}
	function menuActivate(clickMenu){
		if(d2Open==false){
			d2Open=true
			if(selectedMenu!=clickMenu && selectedMenu!=1){
				selectedMenu = clickMenu;
				openH = closeH * 2 + (71 * selectedMenu.nextElementSibling.children.length)
				// 40 -> 서브타이틀 li높이, 20 -> ul padding 위아래 10px씩, 71 -> 서브타이틀 아래 ul의 li 높이
				gsap.to(selectedMenu.parentElement, {height:openH, duration:.2, ease:'power1.out'})			
			}else
			if(selectedMenu==1){
				selectedMenu=null
			}
		}
	}
	function d2Click(){
		menuInActivate(this);
		selectedMenu=null
	}
}

$(document).ready(function(){
	let past=$('.past_view p');
	$(past).click(function(){
		if($(this).siblings('ul').is(':visible')){
			$(this).siblings('ul').slideUp();
			$(this).parent().removeClass('hover');
		}
		else{
			$(this).siblings('ul').slideDown();
			$(this).parent().addClass('hover');
		}
	})
})
function mobileSearchShowHideEffect(){
	const open = document.querySelector('.m_search')	
	const close = document.querySelector('.mobile_search > .ms_close')
	const ms = document.querySelector('.mobile_search')

	initEvent()

	function initEvent(){
		open.addEventListener('click',mobileSearchShow)
		close.addEventListener('click',mobileSearchHide)
	}
	
	function mobileSearchShow(){
		gsap.to(ms,{y:0})
	}
		function mobileSearchHide(){
		gsap.to(ms,{y:-100 + '%'})
	}
}