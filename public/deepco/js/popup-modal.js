/* 공통 모달 */
function openModal(buttonClass, modalClass) {
  const modalButton = document.querySelector(`${buttonClass} .btn-modal`);
  const modal = document.querySelector(`${modalClass}`);
  const overlay = document.querySelector('.overlay');
  const closeButton = modal.querySelector('.btn-close');

  function openModalHandler() {
    overlay.classList.add('is-active');
    modal.classList.add('is-active');
  }

  function closeModalHandler() {
    modal.classList.remove('is-active');
    overlay.classList.remove('is-active');
  }

  modalButton.addEventListener('click', openModalHandler);
  closeButton.addEventListener('click', closeModalHandler);
  overlay.addEventListener('click', closeModalHandler);
}


openModal('.banner-item.guide', '.popup-modal.guide');    //조립가이드
openModal('.banner-item.book', '.popup-modal.book');     //워크북
openModal('.banner-item.update', '.popup-modal.update');  //소프트웨어 업데이트
openModal('.content-tab-item.update', '.popup-modal.update');  //소프트웨어 업데이트-다운로드 PC메뉴
// openModal('.tab-menu-item.update', '.popup-modal.update');  //소프트웨어 업데이트-다운로드 모바일메뉴
openModal('.footer-menu-item.privacy', '.popup-modal.privacy');  //개인정보처리방침
openModal(' ', '.popup-modal.iro');    //IRO 국제로봇올림피아드
openModal(' ', '.popup-modal.studio');    //딥코스튜디오 오픈
openModal('.IRO-item.winner', '.popup-modal.winner');    //IRO 수상영상