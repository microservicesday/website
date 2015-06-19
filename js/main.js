import Header from './header';
import Map from './map';

let head = new Header();
let map = new Map();

let hotelMapIsVisible = false;
let handleHotelMapToggleClick = function(e) {
  e.preventDefault();
  if (!hotelMapIsVisible) {
    map.showHotels();
    document.getElementById('location').scrollIntoView();
  } else {
    map.hideHotels();
  }
  hotelMapIsVisible = !hotelMapIsVisible;
};

document.getElementById('toggleHotelMap').addEventListener('click', handleHotelMapToggleClick);
