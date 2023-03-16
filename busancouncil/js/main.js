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
        pauseOnHover: true,
    });
})

let previousUrl = window.location.href;

setInterval(function () {
    let init = true;
    const currentUrl = window.location.href;
    if (currentUrl !== previousUrl || init) {
        let nowPage = currentUrl.substring(previousUrl.lastIndexOf('#'));
        console.log('URL이 변경되었습니다.');
        console.log(nowPage);
        // URL 변경 시 실행할 코드 작성
        previousUrl = currentUrl;

        this.document.querySelectorAll('.fixedBtn').forEach(element => {
            // element.innerHTML = nowPage;

            if (nowPage == "#page2") {
                element.style.backgroundColor = "#3cacbb";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl'><div><p>세부적인 주요안건 처리현황을 확인하실 수 있습니다.</p><strong>[부산시의회 홈페이지 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page6") {
                element.style.backgroundColor = "#8e72ca";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>5분 자유발언 상세 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page7") {
                element.style.backgroundColor = "#8e72ca";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>5분 자유발언 상세 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page8") {
                element.style.backgroundColor = "#8e72ca";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>5분 자유발언 상세 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page9") {
                element.style.backgroundColor = "#8e72ca";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>5분 자유발언 상세 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }
        });
    }
    init = false;
}, 100); // 0.1초마다 체크