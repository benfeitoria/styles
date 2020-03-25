/**
 * Alert dismissible
 */
let alertDismissibles = document.querySelectorAll('.alert--dismissible');
for(let alertDismissible of alertDismissibles){
    /**
     * Deal with alert dismissibles
     */
    let element = alertDismissible.querySelector('.alert__close');
    element
        .addEventListener('click',function(event) {
            event.preventDefault();
            element.parentElement.classList.add("fade-out");
        }); 
}