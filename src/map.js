const initMap = () => {
    let paris = {lat: 48.8580660, lng: 2.2945776};
    
    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 18,
            center: paris,
            mapTypeId: 'satellite'
        });

        let marker = new google.maps.Marker({
            position: paris,
             map: map,
             icon: 'images/marker.png'
            });
  }

  export {initMap};
   