import $h from "../core/functions/render";
import $s from "../core/functions/search";

export default class BNavbar{
    constructor(selector, props){
        this._selector = selector;
        this._props = props;
        
        this.boot();
    }
    events(){
        $s(`${this._selector} > ul > li.dropdown > a`).items.forEach(function (dropdownItem){
            dropdownItem.onclick = function(e){
                e.target.dispatchEvent(
                    new Event('$b.navbar.dropdown.clicked')
                );
            }
        });
    }

    boot(){
        this.events();

        this.responsive();
    }

    responsive(){
        let NavListResponsive = $h('ul',{
            class: 'nav-responsive-items'
        });

        for(let item of $s(`${this._selector} > ul > li`).items){
            let NavListResponsiveItem = null;

            if(item.classList.contains('dropdown')){
                NavListResponsiveItem = $h('li',{class: 'dropdown'}).html(item.innerHTML);
            }
            else if(!item.classList.contains('divider')){
                NavListResponsiveItem = $h('li').html(item.innerHTML);
            }

            if(NavListResponsiveItem) NavListResponsive.append(NavListResponsiveItem);
        }

    }
}