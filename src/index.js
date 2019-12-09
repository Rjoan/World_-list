import {initMap} from "./map";
import {getData} from "./data";

const init = () => {
    initMap();
    getData();
}

window.init = init;   