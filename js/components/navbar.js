/**
 * Top navigation mobile actions
 */
let mobileTopNavigations = document.querySelectorAll('.navigation--top--mobile');
for(let mobileTopNavigation of mobileTopNavigations){
    /**
     * Deal with dropdown items
     */
    let dropdownItems = mobileTopNavigation.querySelectorAll('li.dropdown');
    for(let dropdownItem of dropdownItems)
        dropdownItem
            .querySelector('a')
            .addEventListener('click',function(event){
                event.preventDefault();
                event.target.nextElementSibling.classList.toggle('collapsed');
            });

    /**
     * Dealing with toggle menu
     */

    mobileTopNavigation
        .querySelector('i.navigation--top--mobile__heading__menu-toggle')
        .addEventListener('click',function (event) {
            let menuToggle = event.target;

            menuToggle
                .classList
                .toggle('bfi--menu');

            menuToggle
                .classList
                .toggle('bfi--times');

            mobileTopNavigation
                .classList
                .toggle('collapsed');
        })



}