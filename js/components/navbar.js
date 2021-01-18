const mobileTopNavigation = document.querySelector('.navigation--top--mobile')
const dropdownItems = mobileTopNavigation.querySelectorAll('li.dropdown')
dropdownItems.forEach((dropdownItem) => {
  dropdownItem.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault()
    const element =
      event.target.tagName === 'I' ? event.target.parentElement : event.target
    if (element.nextElementSibling !== null) {
      element.nextElementSibling.classList.toggle('collapsed')
    }
  })
})
const navigationMenuToggle = mobileTopNavigation.querySelector(
  'i.navigation--top--mobile__heading__menu-toggle'
)

if (navigationMenuToggle) {
  navigationMenuToggle.addEventListener('click', (event) => {
    const menuToggle = event.target
    menuToggle.innerText = menuToggle.innerText === 'close' ? 'menu' : 'close'
    mobileTopNavigation.classList.toggle('collapsed')
  })
}
