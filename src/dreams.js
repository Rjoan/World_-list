import {addMarkerOnMap} from './map';
import {data} from './data';

const dreamsContainer = document.querySelector('#row-dreams')

const buildAllDreams = () => {
   while(dreamsContainer.hasChildNodes()) {
      dreamsContainer.removeChild(dreamsContainer.lastChild);
   }

  for(const dream of data) {
      const dreamElement = document.createElement('div');
      dreamElement.innerHTML = `
         <div class="card text-center">
            <div class="card-header font-weight-bold"><h4>${dream.description}</h4></div>
            <img src="${dream.imagePath}" alt="#" class="card-img-top">
            <div class="card-body">
               <a href="#" class="btn btn-${dream.done ? "secondary" : "danger"} font-weight-bold btn-block">${dream.done ? "Je veux le refaire" : "Je me lance !"}</a>
            </div>
            <div class="card-footer text-muted text-right">
               <a href="" class="btn btn-outline-secondary btn-sm">Visiter</a>
               <a href="${dream.link}" class="btn btn-outline-dark btn-sm">Plus d'info</a>
            </div>
         </div>`;

      dreamsContainer.appendChild(dreamElement);
      addMarkerOnMap(dream);
  }
}

export {buildAllDreams};