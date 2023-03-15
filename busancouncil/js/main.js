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

let previousUrl = window.location.href;

setInterval(function () {
    const currentUrl = window.location.href;
    if (currentUrl !== previousUrl) {
        let nowPage = currentUrl.substring(previousUrl.lastIndexOf('#'));
        console.log('URL이 변경되었습니다.');
        console.log(nowPage);
        // URL 변경 시 실행할 코드 작성
        previousUrl = currentUrl;

        this.document.querySelectorAll('.fixedBtn').forEach(element => {
            // element.innerHTML = nowPage;

            if (nowPage == "#page2") {
                element.style.backgroundColor = "#02B1C2";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl'><div><p>세부적인 주요안건 처리현황을 확인하실 수 있습니다.</p><strong>[부산시의회 홈페이지 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page6") {
                element.style.backgroundColor = "#B0A9D1";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>세부적인 5분 자유발언 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page7") {
                element.style.backgroundColor = "#B0A9D1";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>세부적인 5분 자유발언 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page8") {
                element.style.backgroundColor = "#B0A9D1";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>세부적인 5분 자유발언 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page9") {
                element.style.backgroundColor = "#B0A9D1";
                element.innerHTML = "<a href='https://council.busan.go.kr/broadcast/5minutes#copyUrl' target='_blank'><div><p>세부적인 5분 자유발언 내용을 확인하실 수 있습니다.</p><strong>[부산시의회 5분 자유발언 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page10") {
                element.style.backgroundColor = "#713745";
                element.innerHTML = "<a href='https://council.busan.go.kr/council/bbs3' target='_blank'><div><p>해당 조례안에 대한 자세한 정보를 확인하실 수 있습니다.</p><strong>[부산시의회 입법예고 바로가기]</strong></div></a>";
                element.style.display = "block";
            }
            else if (nowPage == "#page13") {
                element.style.backgroundColor = "#821316";
                element.innerHTML = "<a href='https://youtube.com/@busancouncil' target='_blank'><div><p>제9대 부산광역시의회 연구단체와 활동을<br>확인하실 수 있습니다.</p><strong>[부산시의회 유튜브 바로가기]</strong></div></a>";
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }

        });
    }
}, 100); // 0.1초마다 체크