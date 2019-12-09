import { buildAllDreams } from "./dreams";

let data;

const getData = () => {
    const req = new XMLHttpRequest();
    const method = "GET";
    const url = "https://world-bucket-list-261315.firebaseio.com/" + ".json";

    req.open(method, url);

    req.onreadystatechange = function(e) {
        if(this.status === 200) {
            data = JSON.parse(this.responseText);
            buildAllDreams();
        }else {
            console.log("Status: " + this.status);
        }
    }
 
    req.send();
}

export {data,getData};