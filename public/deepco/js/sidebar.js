const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu')
const sidebar = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')

const sidebarMenu = document.querySelector('.tab-menu-item button')


function openSidebar() {
  sidebar.classList.add('is-active')
  sidebarOverlay.classList.add('is-active')
}

sidebarMenuButton.addEventListener('click', openSidebar)

function closeSidebar() {
  sidebar.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebar)







// function gotoSection(name) {
//   sidebar.classList.remove('is-active')
//   sidebarOverlay.classList.remove('is-active')

//   var location = document.querySelector("." + name).offsetTop;
//   window.scrollTo({top: location, behavior: 'smooth'});

// }

// sidebarMenu.addEventListener('click', gotoSection)
