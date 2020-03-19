/**
 * Alert dismissible
 */
let alertDismissibles = document.querySelectorAll('.alert--dismissible');
for(let alertDismissible of alertDismissibles){
    /**
     * Deal with alert dismissibles
     */
    alertDismissible
        .querySelector('.alert--dismissible__close')
        .addEventListener('click',function(event){
            event.preventDefault();
            event.toElement.parentElement.classList.add("fade-out");
        }); 
}