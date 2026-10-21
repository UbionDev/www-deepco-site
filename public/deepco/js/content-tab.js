function scrollToSection(event) {
    var class01Offset = $('section.content-what').offset();
    var class02Offset = $('section.content-product').offset();
    var class03Offset = $('section.content-activity').offset();
    var class04Offset = $('section.content-download').offset();
    var class05Offset = $('section.content-faq').offset();
    var class06Offset = $('section.content-contact').offset();
    var class07Offset = $('section.content-IRO').offset();

    if ($(document).scrollTop() > class01Offset.top - 100 && $(document).scrollTop() <= class02Offset.top - 285) {
        $("li[aria-labelledby=content-what]").addClass('is-active').siblings().removeClass('is-active');
    }

    else if ($(document).scrollTop() > class02Offset.top - 286 && $(document).scrollTop() <= class04Offset.top - 285) {
        $("li[aria-labelledby=content-product]").addClass('is-active').siblings().removeClass('is-active');
    }

    else if ($(document).scrollTop() > class03Offset.top - 286 && $(document).scrollTop() <= class05Offset.top - 285) {
        $("li[aria-labelledby=content-activity]").addClass('is-active').siblings().removeClass('is-active');
    }

    else if ($(document).scrollTop() > class04Offset.top - 286 && $(document).scrollTop()<= class07Offset.top - 285) {
        $("li[aria-labelledby=content-download]").addClass('is-active').siblings().removeClass('is-active');
    }

    else if ($(document).scrollTop() > class05Offset.top - 286 && $(document).scrollTop()<= class06Offset.top - 285) {
        $("li[aria-labelledby=content-faq]").addClass('is-active').siblings().removeClass('is-active');
    }

    else if ($(document).scrollTop() > class06Offset.top - 286) {
        $("li[aria-labelledby=content-contact]").addClass('is-active').siblings().removeClass('is-active');
    }
    else {
        $("li[aria-labelledby]").removeClass('is-active');
    }
}

//GNB 스크롤 높이에 따른 스타일 변경
function scrollOnTop() {
    if ($(document).scrollTop() < 100) {
        $(".gnb").attr('class','gnb on-top');
    }
    else {
        $(".gnb.on-top").removeClass('on-top');
    }
}

$(document).ready(function () {

    var triggerBtn = $("li[aria-labelledby]").children('button');
    triggerBtn.click(function () {
        var elementClassName = $(this).parent('li').attr('aria-labelledby');
        $('body, html').animate({ scrollTop: $("section." + elementClassName).offset().top }, 300);
        // console.log(class04Offset);
    });

    $(window).on("scroll load", function () {
        scrollOnTop();
        if($(window).width() >= 768) {
            //모바일웹 디바이스-sidebar
            scrollToSection(".content-tab ul li");
            $(".sidebar-tab-menu ul li").removeClass('is-active');
        } else{
            //PC웹 디바이스-content-tab
            scrollToSection(".sidebar-tab-menu ul li");
            $(".content-tab ul li").removeClass('is-active');
        }
    });

});