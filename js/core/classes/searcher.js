export default class Searcher{
    constructor(query){
        this._query = query;
        this._found = document.querySelectorAll(query);
    }

    get exists(){
        return this._found.length > 0;
    }

    get first(){
        return this.exists ? this._found[0] : undefined;
    }
   
    get items(){
        return this._found;
    } 
}