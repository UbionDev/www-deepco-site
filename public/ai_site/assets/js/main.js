
$(document).ready(function() {

    ToggleBTN("#savecoding","#rmcoding");
    ToggleBTN("#runBtn","#stopBtn");

});

//토글버튼
function ToggleBTN(btn1,btn2) {
    $(btn1).on('click', function(){
        $(this).toggleClass('active');
        $(btn2).addClass('active');
    });
    $(btn2).on('click', function(){
        $(this).toggleClass('active');
        $(btn1).addClass('active');
    });
}

//툴팁
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//뷰포트에 따른 vh값 설정:구버전(IE ,Android OS 5.0 미만, iOS OS 8 미만 버전) 지원안함
function setScreenSize() {
    // 먼저 뷰포트 높이를 얻고 1%를 곱하여 vh 유닛의 값을 구함.
    var vhCalc = window.innerHeight * 0.01;
    //--vh 사용자 지정 속성값을 문서의 루트css속성으로 설정
    document.documentElement.style.setProperty('--vh', vhCalc + 'px');
}

$(document).ready(function(){
    //IE ,Android OS 5.0 미만 버전 대응
    var ua = navigator.userAgent;
    var androidversion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
    var agent = navigator.userAgent.toLowerCase();
    if (((ua.indexOf("Android") >= 0) && (androidversion < 5.0)) || (navigator.appName == 'Netscape' &&
            navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)) {
        $('body').addClass('old-mode');
    } else {
        $('body').addClass('setScreenSize-mode');
        setScreenSize();
        $(window).bind('resize', function () {
            setScreenSize();
        });
    }
});