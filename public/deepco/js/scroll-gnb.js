


var prevScrollpos = window.pageYOffset;// 스크롤 반응 헤더



window.onscroll = function() {
  
  var currentScrollPos = window.pageYOffset;// 반응형 헤더

  
  if (prevScrollpos > currentScrollPos) {// 만약 방금 스크롤이 지금 스크롤보다 크다면 (페이지를 위로 올리는 행위라면)

    // document.getElementsByClassName("gnb")[0].setAttribute("style","top: 0; background-color: transparent");
    // document.getElementsByClassName("content-tab")[0].setAttribute("style","display: none;");
    // document.getElementsByClassName("logo-blue")[0].setAttribute("style","display: none;");
    // document.getElementsByClassName("logo-white")[0].setAttribute("style","display: block;");
    // document.getElementsByClassName("hamberg")[0].setAttribute("style","color: white");

    document.getElementsByClassName("gnb")[0].setAttribute("style","top: 0; background-color: rgba(228, 228, 228, 0.3);");
    document.getElementsByClassName("gnb")[0].setAttribute("style","top: 0; background-color: white; box-shadow: 0 14px 28px rgba(141,187,255,0.3);");
    document.getElementsByClassName("content-tab")[0].setAttribute("style","display:block");
    document.getElementsByClassName("logo-blue")[0].setAttribute("style","display: block;");
    document.getElementsByClassName("logo-white")[0].setAttribute("style","display: none;");
    document.getElementsByClassName("hamberg")[0].setAttribute("style","color: #0096FF");



  } else {// 만약 방금의 스크롤이 지금 스크롤보다 작다면 (페이지를 아래로 내리는 행위라면)

    document.getElementsByClassName("gnb")[0].setAttribute("style","top: 0; background-color: rgba(228, 228, 228, 0.3);");
    document.getElementsByClassName("gnb")[0].setAttribute("style","top: 0; background-color: white; box-shadow: 0 14px 28px rgba(141,187,255,0.3);");
    document.getElementsByClassName("content-tab")[0].setAttribute("style","display:block");
    document.getElementsByClassName("logo-blue")[0].setAttribute("style","display: block;");
    document.getElementsByClassName("logo-white")[0].setAttribute("style","display: none;");
    document.getElementsByClassName("hamberg")[0].setAttribute("style","color: #0096FF");

  }
  prevScrollpos = currentScrollPos;
  
  
  
  
  
  
  

}
