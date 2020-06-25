const forms = document.querySelectorAll('.form-validation')

forms.forEach((form) => {
  form.addEventListener(
    'submit',
    () => {
      const inputs = form.querySelectorAll('input,textarea,select')
      inputs.forEach((input) => {
        if (!input.validity.valid) {
          input.parentElement.classList.add('input-group--invalid')
          input.parentElement
            .querySelector('.input-group__alert--error')
            .classList.add('input-group__alert--active')
        }
      })
    },
    false
  )
})
