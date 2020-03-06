export default class Elementor{
    constructor(element,attr){
        this._tag = element;
        this._element = document.createElement(element);

        if(typeof attr === 'object') this.attr(attr);
    }

    element(element){
        if(typeof element === 'undefined') return this._element;

        this._tag = element;
        this._element = document.createElement(element);

        return this;
    }

    reset(){
        this._element = document.createElement(this._tag);

        return this;
    }

    attr(attr,value){
        if(typeof attr === 'object'){
            for(let key of Object.keys(attr)) this._element.setAttribute(key,attr[key]);
        }
        else this._element.setAttribute(attr,value);

        return this;
    }

    html(value){
        this._element.innerHTML = value;

        return this;
    }

    append(el){
        this._element.append(
            el.element()
        );

        return this;        
    }
}