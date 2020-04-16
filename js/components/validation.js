var forms = document.querySelectorAll('.form-validation');

for(let form of forms){
    form.addEventListener("submit", function (event) {
        
        // Each time the user tries to send the data, we check all inputs
        for(let input of form.querySelectorAll("input,textarea,select")){
            if (!input.validity.valid) {
                input.parentElement.querySelector('.input-group__alert--error').classList.add("input-group__alert--active");
            }
        }
    }, false);
}