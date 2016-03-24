
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
    this.southplacehotel = new google.maps.Marker({
      position: new google.maps.LatLng(51.5189933, -0.08654409999996915),
      map: this.map,
      title: 'South Place Hotel'
    });
    this.themontcalmlondoncity = new google.maps.Marker({
      position: new google.maps.LatLng(51.5207792, -0.09092320000002019),
      map: this.map,
      title: 'The Montcalm'
    });
    this.malmaison = new google.maps.Marker({
      position: new google.maps.LatLng(51.5208945, -0.10024459999999635),
      map: this.map,
      title: 'Malmaison'
    });
    this.travelodge = new google.maps.Marker({
      position: new google.maps.LatLng(51.52269039999999, -0.08680709999998726),
      map: this.map,
      title: 'Travelodge'
    });
  }

  hideHotels() {
    this.southplacehotel.setMap(null);
    this.themontcalmlondoncity.setMap(null);
    this.malmaison.setMap(null);
    this.travelodge.setMap(null);
  }

}

module.exports = Map;
