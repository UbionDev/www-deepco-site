const faqItemButtonList = document.querySelectorAll(
  '.faq-list .faq-item-button'
)

function togglefaqItem() {
  const faqItem = this.parentNode
  faqItem.classList.toggle('is-open')
}

faqItemButtonList.forEach(function (button) {
  button.addEventListener('click', togglefaqItem)
})
