let map;
const resetMapButton = document.querySelector("#reset-map");

const initMap = () => {
    let paris = {lat: 48.8580660, lng: 2.2945776};
    map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 3,
        center: paris,
    });

    addMarkerListener();
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
 
export {initMap, addMarkerOnMap}; 