export default class BNavbar{
    constructor(selector, props){
        this._selector = selector;
        this._props = props;
        
        this.boot();
    }

    boot(){
        
        this.responsive();
    }

    responsive(){
        /** @todo implement responsive stuff */
    }
}