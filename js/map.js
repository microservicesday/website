
class Map {

  constructor({
    el      = document.getElementById('location'),
    content = document.getElementById('infowindow-template').innerHTML,
    zoom    = 13,
    lat     = msGeo.lat,
    lng     = msGeo.lng
  } = {}) {
    let center     = new google.maps.LatLng(lat, lng);
    let map        = new google.maps.Map(el, { zoom, center });
    let infowindow = new google.maps.InfoWindow({ content });
    let marker     = new google.maps.Marker({
      position: center,
      map: map,
      title: 'Microservices day location'
    });

    infowindow.open(map, marker);

  }


}

module.exports = Map;
