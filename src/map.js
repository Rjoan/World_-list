let map;
let panorama;
const panoramaElement = document.querySelector('#panorama');
const resetMapButton = document.querySelector("#reset-map");

const initMap = () => {
    let paris = {lat: 48.8580660, lng: 2.2945776};
    map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 3,
        center: paris,
        streetViewControl: false
    });

    panorama = new google.maps.StreetViewPanorama(
    document.getElementById('panorama'), {
        position: {lat: 48.8580660, lng: 2.2945776},
        pov: {
        heading: 34,
        pitch: 10
        }
    });

    map.setStreetView(panorama);

    addMarkerListener();
    panoramaElement.style.display = "none";

  }

  const addMarkerListener = () => {
    resetMapButton.addEventListener('click', resetMap);
  }

  const addMarkerOnMap = dream => {
    let marker = new google.maps.Marker({
        position: dream.coord,
        map: map,
        icon: dream.done ? "images/marker_done.png" : "images/marker.png"
    });

    marker.addListener('click', function() {
        map.setZoom(20);
        map.setCenter(marker.getPosition())
        map.setMapTypeId("satellite")
    })
  }

  const resetMap = () => {
        map.setZoom(3);
        map.setCenter({lat: 48.8580660, lng: 2.2945776});
        map.setMapTypeId("roadmap")
  } 

  const visitDreamOnMap = position => {
        panorama.setPosition(position)
        panoramaElement.style.display = "block";
  }
 
export {initMap, addMarkerOnMap, visitDreamOnMap}; 