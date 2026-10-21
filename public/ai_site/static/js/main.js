// //화면분할
// jQuery(function($) {
//     $('#split-wrapper').split({
//         orientation: 'horizontal',
//         position: '95%',
//         limit: 100,
//         percent: true
//     });
// });

$(document).ready(function() {

    // ToggleBTN("#savecoding","#rmcoding");
    // ToggleBTN("#runBtn","#stopBtn");

    $('input[type="text"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);

    changeInput('.changetitle');

    setSplitters("40px");

    $('#consolSection .btn-group button.open').on('click', function(){
        if($(this).parents().find('#consolSection').hasClass('stateopen') == true){
            // setSplitters("40px");
            $(this).parents().find('#consolSection').removeClass('stateopen');
            $(this).parent().next('.iframeWrap.type_webssh').hide();
            $(this).children('i').attr('class','bi bi-chevron-up');
        } else if($(this).parents().find('#consolSection').hasClass('stateopen') == false){
            // setSplitters("40%");
            $(this).parents().find('#consolSection').addClass('stateopen');
            $(this).parent().next('.iframeWrap.type_webssh').show();
            $(this).children('i').attr('class','bi bi-chevron-down');
        }
    });

    /* 클래스 탭----------------------------------------------------------------------- */
    //탭 순서이동
    // $("#class-tab").sortable({
    //   flow: 'horizontal',
    //   scroll: false,
    //   scrollSensitivity: 200,
    //   scrollSpeed: 50,
    //   elHeight: 'auto',
    //   filter: function (index) {
    //     return index !== 2;
    //   },
    //   timeout: 500
    // });

    //로드,리사이즈 시,  탭리스트 넓이 변경
    $(window).on('load resize', function () {
        scrollState();
    });

    //탭 클릭 시, 탭리스트 넓이 변경
    $('#class-tab>a, #add-tab').on('click touchend', function () {
        scrollState();
    });

    $(".leftArrow").click(function () {
        var tabWidth = $('#class-tab').children('a.active').siblings().outerWidth();
        var leftPos = $('.nav-tabs-wrap').scrollLeft();
        $('.nav-tabs-wrap').animate({
            'scrollLeft': leftPos - tabWidth
        }, 300);
        //가로스크롤 시작점에 위치
        if (leftPos <= 0) {
            setTimeout(function () {
            alert("클래스목록 시작입니다!");
            }, 300);
        }
    });

    $(".rightArrow").click(function () {
        var tabWidth = $('#class-tab').children('a').outerWidth();
        var leftPos = $('.nav-tabs-wrap').scrollLeft();
        $('.nav-tabs-wrap').animate({
            'scrollLeft': leftPos + tabWidth
        }, 300);
        //가로스크롤 끝점에 위치
        if (Math.ceil(leftPos + $('.nav-tabs-wrap').width()) == $('#class-tab').width() + 144) {
            alert("클래스목록 끝입니다!");
        }
    });
});

//화면영역 제어
function setSplitters(val) {
   var splitter = $('#split-wrapper').kendoSplitter({
    orientation: "vertical",
    panes: [
        { collapsible: true },
        { collapsible: false, size: val, min: "40px", max: "100%" },
    ]
  });
}

//입력창 반응형
function resizeInput() {
    $(this).attr('size', $(this).val().length + 2);
}

//입력창 값 변경
function changeInput(name) {
    $(name).children('input[type="text"]').on("change keyup paste", function() {
        var titleValue = $(this).val();
        $(this).attr('value',titleValue);
        if(event.keyCode == '13'){
            $(this).blur();
        }
    });
}

//클래스 탭리스트 넓이구하기
function scrollState() {
    var totalWidth = 0;
    var set = $('a.nav-link');

    set.each(function(){
        totalWidth = totalWidth + $(this).outerWidth();
    });

    $("#class-tab").css('width', totalWidth);
    if ($(".nav-tabs-wrap").outerWidth() >= totalWidth + 144) {
        $(".leftArrow, .rightArrow").addClass('disabled');
        $('.nav-tabs-wrap').scrollLeft(0);
    } else if ($(".nav-tabs-wrap").outerWidth() < totalWidth + 144) {
        $(".leftArrow, .rightArrow").removeClass('disabled');
    }
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


//좌측 문제 영역 높이 세팅
$(function () {
    $(window).on('load pageload resize', function () {
        var explainHeight = $('.section-left').height() - $('.section-left').children('.player').height();
        var splitHeight = $('#split-wrapper').height() - 45;
        $('.section-left').children('.explain').css('max-height', explainHeight);
        $('#content-wrapper').css('height',splitHeight);
        $('.k-splitbar').css('top', splitHeight);
        $('#consolSection').css('top', splitHeight + 5);
    });
});
