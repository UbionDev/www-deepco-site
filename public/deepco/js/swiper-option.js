/* [IRO]대회내용  ------------------------------------------------------*/
const IROcontSlide = new Swiper(".IRO-cont", {
  slidesPerView: "auto",
  spaceBetween: 0,
  grabCursor: true,
  rewind: true,
  centeredSlides: false,
  slidesOffsetBefore: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true, // 사용자 상호 작용 시 자동 재생 일시 중지
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesOffsetBefore: 0,
      centeredSlides: true,
    },
    768: {
      slidesOffsetBefore: 300,
    },
    1500: {
      slidesOffsetBefore: 450,
    },
  },
});


/* [IRO]맵 목록  ------------------------------------------------------*/
const IROmapthumbSlide = new Swiper(".thumb-wrap", {
  loop: true,
  spaceBetween: 5,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const IROmapviewtSlide = new Swiper(".IRO-map-viewer", {
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 1800,
    disableOnInteraction: false, // 사용자 상호 작용 시 자동 재생 일시 중지
  },
  thumbs: {
    swiper: IROmapthumbSlide,
  },
});