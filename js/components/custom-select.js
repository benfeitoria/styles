document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    setTimeout(function () {
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

      for (i = 0; i < selectDivContainer.length; i++) {
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

          for (j = 1; j < selectElement.length; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item */
            optionDiv = document.createElement('DIV')
            optionDiv.innerHTML = selectElement.options[j].innerHTML

            optionDiv.addEventListener('click', function (e) {
              /* When an item is clicked, update the original select box,
                and the selected item */
              let y
              let i
              let k
              const [s] = this.parentNode.parentNode.getElementsByTagName(
                'select'
              )

              const h = this.parentNode.previousSibling

              for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i
                  h.innerHTML = this.innerHTML
                  y = this.parentNode.getElementsByClassName(
                    'custom-select__items--selected'
                  )

                  for (k = 0; k < y.length; k++) {
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
          selectDiv.addEventListener('click', function (e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box if not disabled */
            e.stopPropagation()
            closeAllSelect(this)
            this.nextSibling.classList.toggle('custom-select__items--hidden')
            this.classList.toggle('custom-select__selected--active')
          })
        }
      }

      function closeAllSelect(elmnt) {
        let i
        const arrNo = []

        const optionsDiv = document.getElementsByClassName(
          'custom-select__items'
        )
        const optionSelected = document.getElementsByClassName(
          'custom-select__selected'
        )

        for (i = 0; i < optionSelected.length; i++) {
          if (elmnt == optionSelected[i]) {
            arrNo.push(i)
          } else {
            optionSelected[i].classList.remove(
              'custom-select__selected--active'
            )
          }
        }

        for (i = 0; i < optionsDiv.length; i++) {
          if (arrNo.indexOf(i)) {
            optionsDiv[i].classList.add('custom-select__items--hidden')
          }
        }
      }

      /* If the user clicks anywhere outside the select box,
      then close all select boxes: */
      document.addEventListener('click', closeAllSelect)
    }, 1000)
  }
}
