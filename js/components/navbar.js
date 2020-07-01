const mobileTopNavigations = document.querySelectorAll(
  '.navigation--top--mobile'
)

mobileTopNavigations.forEach((mobileTopNavigation) => {
  const dropdownItems = mobileTopNavigation.querySelectorAll('li.dropdown')

  dropdownItems.forEach((dropdownItem) => {
    dropdownItem.querySelector('a').addEventListener('click', (event) => {
      event.preventDefault()
      event.target.nextElementSibling.classList.toggle('collapsed')
    })

    mobileTopNavigation
      .querySelector('i.navigation--top--mobile__heading__menu-toggle')
      .addEventListener('click', (event) => {
        const menuToggle = event.target

        if (menuToggle.innerText == 'close') {
          menuToggle.innerText = 'menu'
        } else {
          menuToggle.innerText = 'close'
        }

        mobileTopNavigation.classList.toggle('collapsed')
      })
  })
})
