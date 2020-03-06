import Searcher from "../classes/searcher";

export default function $s(q){
    return new Searcher(q);
}