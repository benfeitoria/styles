const inputRadios = document.querySelectorAll('input[type=radio]')

inputRadios.forEach((inputRadio) => {
  const element = inputRadio
  if(element.closest('label.radio').closest('li')){
      if (element.checked) {
        element.closest('label.radio').closest('li').classList.add('active')
      }

      element.addEventListener('change', () => {
        if (element.checked) {
          ;[].forEach.call(inputRadios, function (el) {
            el.closest('label.radio').closest('li').classList.remove('active')
          })
          element.closest('label.radio').closest('li').classList.add('active')
        }
      })
  }
})
