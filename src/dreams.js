import {addMarkerOnMap, visitDreamOnMap} from './map';
import {data} from './data';

const dreamsContainer = document.querySelector('#row-dreams')

const buildAllDreams = () => {
   while(dreamsContainer.hasChildNodes()) {
      dreamsContainer.removeChild(dreamsContainer.lastChild);
   } 
   addDreamsListener();

  for(const dream of data) {
      const dreamElement = document.createElement('div');
      dreamElement.innerHTML = `
         <div class="card text-center " id="${dream.id}">
            <div class="card-header font-weight-bold"><h4>${dream.description}</h4></div>
            <img src="${dream.imagePath}" alt="#" class="card-img-top">
            <div class="card-body">
               <a href="#" class=" button-action btn btn-${dream.done ? "secondary" : "danger"} font-weight-bold btn-block">${dream.done ? "Je veux le refaire" : "Je me lance !"}</a>
            </div>
            <div class="card-footer text-muted text-right">
               <a href="#" class="button-visit btn btn-outline-secondary btn-sm">Visiter</a>
               <a href="${dream.link}" target="_blank" class="btn btn-outline-dark btn-sm">Plus d'info</a>
            </div>
         </div>`;

      dreamsContainer.appendChild(dreamElement);
      addMarkerOnMap(dream);
  }
}

const addDreamsListener = () => {
   document.querySelectorAll(".button-visit").forEach(item => {
      item.addEventListener('click', event => {
         console.log('jojo')

         visitDream(item.parentElement.parentElement.getAttribute("id"));
      })
   });

   document.querySelectorAll(".button-action").forEach(item => {
      item.addEventListener('click', event => {
         toggleDreamDone(item.parentElement.parentElement.getAttribute("id"));
         buildAllDreams();
      })
   })
}

const visitDream = dreamId => {
   let position = data.filter(item => item.id === dreamId)[0].coord;
   visitDreamOnMap(position);
}

const toggleDreamDone = dreamId => {
   let dream = data.filter(item => item.id === dreamId)[0];
   dream.done = !dream.done;
}

export {buildAllDreams};