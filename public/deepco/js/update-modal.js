
const updateButton = document.querySelector('.banner-item.update .btn-modal')
const updateModal = document.querySelector('.popup-modal.update')
const updateModalOverlay = document.querySelector('.overlay')
const updateCloseButton = updateModal.querySelector('.btn-close')


function openUpdateModal() {
  updateModal.classList.add('is-active')
  updateModalOverlay.classList.add('is-active')
}

updateButton.addEventListener('click', openUpdateModal)

function closeUpdateModal() {
  updateModal.classList.remove('is-active')
  updateModalOverlay.classList.remove('is-active')
}

updateModalOverlay.addEventListener('click', closeUpdateModal)
updateCloseButton.addEventListener('click', closeUpdateModal)










