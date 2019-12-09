import {initMap} from "./map";
import {buildAllDreams} from "./dreams";

const init = () => {
    initMap();
    buildAllDreams();
}

window.init = init;   