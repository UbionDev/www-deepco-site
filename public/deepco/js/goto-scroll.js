// 스크롤 이동 기능
// 클래스, 아이디 값을 인자로 받아 offsetTop 밸류 초기화
// 초기화된 offsetTop 값을 위치로 이동
function goToScroll(name) {
  var location = document.querySelector("." + name).offsetTop;
  window.scrollTo({top: location, behavior: 'smooth'});
}

