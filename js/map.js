
class Map {

  constructor({
    el      = document.getElementById('location'),
    content = document.getElementById('infowindow-template').innerHTML,
    zoom    = 14,
    lat     = msGeo.lat,
    lng     = msGeo.lng,
    scrollwheel = false,
    draggable = false
  } = {}) {
    let center = new google.maps.LatLng(lat, lng);
    let map = this.map = new google.maps.Map(el, { zoom, center, scrollwheel, draggable });
    let infowindow = new google.maps.InfoWindow({ content });
    let marker = new google.maps.Marker({
      position: center,
      map: map,
      title: 'Microservices day location'
    });

    infowindow.open(map, marker);
  }

  showHotels() {
    this.hotel309 = new google.maps.Marker({
      position: new google.maps.LatLng(40.740301, -74.003049),
      map: this.map,
      title: 'Hotel 309'
    });
    this.dream = new google.maps.Marker({
      position: new google.maps.LatLng(40.7420877, -74.0036235),
      map: this.map,
      title: 'Dream Downtown'
    });
    this.jade = new google.maps.Marker({
      position: new google.maps.LatLng(40.7361131, -73.996635),
      map: this.map,
      title: 'The Jade'
    });
    this.washington = new google.maps.Marker({
      position: new google.maps.LatLng(40.7325, -73.998692),
      map: this.map,
      title: 'Washington Square Hotel'
    });
  }

  hideHotels() {
    this.hotel309.setMap(null);
    this.dream.setMap(null);
    this.jade.setMap(null);
    this.washington.setMap(null);
  }

}

module.exports = Map;
