const alertDismissibles = document.querySelectorAll('.js-alert-dismissible')

alertDismissibles.forEach((alertDismissible) => {
  const element = alertDismissible.querySelector('.alert__close')
  if (element) {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      element.parentElement.classList.add('fade-out')
    })
  }
})
