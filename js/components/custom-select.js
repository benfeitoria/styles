function closeAllSelect(elmnt) {
  let i
  const arrNo = []

  const optionsDiv = document.getElementsByClassName('custom-select__items')
  const optionSelected = document.getElementsByClassName(
    'custom-select__selected'
  )

  for (i = 0; i < optionSelected.length; i += 1) {
    if (elmnt === optionSelected[i]) {
      arrNo.push(i)
    } else {
      optionSelected[i].classList.remove('custom-select__selected--active')
    }
  }

  for (i = 0; i < optionsDiv.length; i += 1) {
    if (arrNo.indexOf(i)) {
      optionsDiv[i].classList.add('custom-select__items--hidden')
    }
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      let i
      let j
      let selectElement
      let selectDiv
      let optionsDiv
      let optionDiv

      /* Look for any elements with the class "custom-select" */
      const selectDivContainer = document.getElementsByClassName(
        'custom-select'
      )

      for (i = 0; i < selectDivContainer.length; i += 1) {
        if (selectDivContainer[i].getElementsByTagName('select')) {
          ;[selectElement] = selectDivContainer[i].getElementsByTagName(
            'select'
          )

          /* For each element create a new DIV that will act as the selected item */
          selectDiv = document.createElement('DIV')
          selectDiv.setAttribute(
            'class',
            selectElement.disabled
              ? 'custom-select__selected custom-select__selected--disabled'
              : 'custom-select__selected'
          )
          selectElement.selectedIndex =
            selectElement.selectedIndex > 0 ? selectElement.selectedIndex : 0

          selectDiv.innerHTML =
            selectElement.options[selectElement.selectedIndex].innerHTML

          selectDivContainer[i].appendChild(selectDiv)

          /* For each element, create a new DIV that will contain the option list */
          optionsDiv = document.createElement('DIV')
          optionsDiv.setAttribute(
            'class',
            'custom-select__items custom-select__items--hidden'
          )

          for (j = 1; j < selectElement.length; j += 1) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item */
            optionDiv = document.createElement('DIV')
            optionDiv.innerHTML = selectElement.options[j].innerHTML

            optionDiv.addEventListener('click', () => {
              /* When an item is clicked, update the original select box,
                and the selected item */
              let y
              let x
              let k
              const [s] = this.parentNode.parentNode.getElementsByTagName(
                'select'
              )

              const h = this.parentNode.previousSibling

              for (x = 0; x < s.length; x += 1) {
                if (s.options[x].innerHTML === this.innerHTML) {
                  s.selectedIndex = x
                  h.innerHTML = this.innerHTML
                  y = this.parentNode.getElementsByClassName(
                    'custom-select__items--selected'
                  )

                  for (k = 0; k < y.length; k += 1) {
                    y[k].removeAttribute('class')
                  }

                  this.setAttribute('class', 'custom-select__items--selected')
                  break
                }
              }

              h.click()
            })

            optionsDiv.appendChild(optionDiv)
          }

          selectDivContainer[i].appendChild(optionsDiv)
          selectDiv.addEventListener('click', (e) => {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box if not disabled */
            e.stopPropagation()
            closeAllSelect(this)
            this.nextSibling.classList.toggle('custom-select__items--hidden')
            this.classList.toggle('custom-select__selected--active')
          })
        }
      }

      /* If the user clicks anywhere outside the select box,
      then close all select boxes: */
      document.addEventListener('click', closeAllSelect)
    }, 1000)
  }
}
