
const guideButton = document.querySelector('.banner-item.guide .btn-modal')
const guideModal = document.querySelector('.popup-modal.guide')
const guideModalOverlay = document.querySelector('.overlay')
const guideCloseButton = guideModal.querySelector('.btn-close')


function openGuideModal() {
  guideModal.classList.add('is-active')
  guideModalOverlay.classList.add('is-active')
}

guideButton.addEventListener('click', openGuideModal)

function closeGuideModal() {
  guideModal.classList.remove('is-active')
  guideModalOverlay.classList.remove('is-active')
}

guideModalOverlay.addEventListener('click', closeGuideModal)


guideCloseButton.addEventListener('click', closeGuideModal)










