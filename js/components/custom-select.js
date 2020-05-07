document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    setTimeout(function(){
      var select_div_container, i, j, select_element, select_div, options_div, option_div;

      /* Look for any elements with the class "custom-select" */
      select_div_container = document.getElementsByClassName("custom-select");

      for (i = 0; i < select_div_container.length; i++) {
        if(select_div_container[i].getElementsByTagName("select")){
          select_element = select_div_container[i].getElementsByTagName("select")[0];
  
          /* For each element, create a new DIV that will act as the selected item */
          select_div = document.createElement("DIV");
          select_div.setAttribute("class", (select_element.disabled?"custom-select__selected custom-select__selected--disabled":"custom-select__selected"));
          select_element.selectedIndex = select_element.selectedIndex > 0?select_element.selectedIndex:0;

          select_div.innerHTML = select_element.options[select_element.selectedIndex].innerHTML;
          select_div_container[i].appendChild(select_div);

          /* For each element, create a new DIV that will contain the option list */
          options_div = document.createElement("DIV");
          options_div.setAttribute("class", "custom-select__items custom-select__items--hidden");
          
          for (j = 1; j < select_element.length; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item */
            option_div = document.createElement("DIV");
            option_div.innerHTML = select_element.options[j].innerHTML;

            option_div.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item */
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;

                for (i = 0; i < s.length; i++) {
                  if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("custom-select__items--selected");

                    for (k = 0; k < y.length; k++) {
                      y[k].removeAttribute("class");
                    }

                    this.setAttribute("class", "custom-select__items--selected");
                    break;
                  }
                }

                h.click();
            });

            options_div.appendChild(option_div);
          }

          select_div_container[i].appendChild(options_div);
          select_div.addEventListener("click", function(e) {
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box if not disabled */
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("custom-select__items--hidden");
            this.classList.toggle("custom-select__selected--active");
          });
        }
      }

      function closeAllSelect(elmnt) 
      {
        /* A function that will close all select boxes in the document,
        except the current select box */
        var options_div, option_selected, i, arrNo = [];
        options_div = document.getElementsByClassName("custom-select__items");
        option_selected = document.getElementsByClassName("custom-select__selected");

        for (i = 0; i < option_selected.length; i++) {
          if (elmnt == option_selected[i]) {
            arrNo.push(i)
          } else {
            option_selected[i].classList.remove("custom-select__selected--active");
          }
        }

        for (i = 0; i < options_div.length; i++) {
          if (arrNo.indexOf(i)) {
            options_div[i].classList.add("custom-select__items--hidden");
          }
        }
      }

      /* If the user clicks anywhere outside the select box,
      then close all select boxes: */
      document.addEventListener("click", closeAllSelect);
    }, 1000);
  }
}