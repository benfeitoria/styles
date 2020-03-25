document.getElementsByTagName('form')[0].addEventListener("submit", function (event) {
    // Each time the user tries to send the data, we check all inputs
    for(let input of document.getElementsByTagName('form')[0].getElementsByTagName("input")){
        if (!input.validity.valid) {
            input.parentElement.querySelector('.form-error').classList.add("form-error--active");
        }
    }
}, false);