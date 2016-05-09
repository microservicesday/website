(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Header = (function () {
  function Header() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$el = _ref.el;
    var el = _ref$el === undefined ? '#header' : _ref$el;
    var _ref$offset = _ref.offset;
    var offset = _ref$offset === undefined ? '#about' : _ref$offset;

    _classCallCheck(this, Header);

    this.libInstance = new Headhesive(el, { offset: offset });
  }

  _createClass(Header, [{
    key: 'destrory',
    value: function destrory() {
      this.libInstance.destroy();
    }
  }]);

  return Header;
})();

module.exports = Header;

},{}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

var head = new _header2['default']();
var map = new _map2['default']();

var hotelMapIsVisible = false;
var handleHotelMapToggleClick = function handleHotelMapToggleClick(e) {
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

},{"./header":1,"./map":3}],3:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Map = (function () {
  function Map() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$el = _ref.el;
    var el = _ref$el === undefined ? document.getElementById('location') : _ref$el;
    var _ref$content = _ref.content;
    var content = _ref$content === undefined ? document.getElementById('infowindow-template').innerHTML : _ref$content;
    var _ref$zoom = _ref.zoom;
    var zoom = _ref$zoom === undefined ? 14 : _ref$zoom;
    var _ref$lat = _ref.lat;
    var lat = _ref$lat === undefined ? msGeo.lat : _ref$lat;
    var _ref$lng = _ref.lng;
    var lng = _ref$lng === undefined ? msGeo.lng : _ref$lng;
    var _ref$scrollwheel = _ref.scrollwheel;
    var scrollwheel = _ref$scrollwheel === undefined ? false : _ref$scrollwheel;
    var _ref$draggable = _ref.draggable;
    var draggable = _ref$draggable === undefined ? false : _ref$draggable;

    _classCallCheck(this, Map);

    var center = new google.maps.LatLng(lat, lng);
    var map = this.map = new google.maps.Map(el, { zoom: zoom, center: center, scrollwheel: scrollwheel, draggable: draggable });
    var infowindow = new google.maps.InfoWindow({ content: content });
    var marker = new google.maps.Marker({
      position: center,
      map: map,
      title: 'Microservices day location'
    });

    infowindow.open(map, marker);
  }

  _createClass(Map, [{
    key: 'showHotels',
    value: function showHotels() {
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
  }, {
    key: 'hideHotels',
    value: function hideHotels() {
      this.southplacehotel.setMap(null);
      this.themontcalmlondoncity.setMap(null);
      this.malmaison.setMap(null);
      this.travelodge.setMap(null);
    }
  }]);

  return Map;
})();

module.exports = Map;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9NYXR0aGV3L3dlYnNpdGUvanMvaGVhZGVyLmpzIiwiQzovVXNlcnMvTWF0dGhldy93ZWJzaXRlL2pzL21haW4uanMiLCJDOi9Vc2Vycy9NYXR0aGV3L3dlYnNpdGUvanMvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQ00sTUFBTTtBQUVDLFdBRlAsTUFBTSxHQUU0QztxRUFBSixFQUFFOzt1QkFBdkMsRUFBRTtRQUFGLEVBQUUsMkJBQUcsU0FBUzsyQkFBRSxNQUFNO1FBQU4sTUFBTSwrQkFBRyxRQUFROzswQkFGMUMsTUFBTTs7QUFHUixRQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBTixNQUFNLEVBQUMsQ0FBQyxDQUFDO0dBQ2pEOztlQUpHLE1BQU07O1dBTUYsb0JBQUc7QUFDVCxVQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzVCOzs7U0FSRyxNQUFNOzs7QUFZWixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7OztzQkNiTCxVQUFVOzs7O21CQUNiLE9BQU87Ozs7QUFFdkIsSUFBSSxJQUFJLEdBQUcseUJBQVksQ0FBQztBQUN4QixJQUFJLEdBQUcsR0FBRyxzQkFBUyxDQUFDOztBQUVwQixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUM5QixJQUFJLHlCQUF5QixHQUFHLFNBQTVCLHlCQUF5QixDQUFZLENBQUMsRUFBRTtBQUMxQyxHQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsTUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQ3RCLE9BQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNqQixZQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0dBQ3RELE1BQU07QUFDTCxPQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7R0FDbEI7QUFDRCxtQkFBaUIsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0NBQ3hDLENBQUM7O0FBRUYsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDOzs7Ozs7Ozs7SUNqQnpGLEdBQUc7QUFFSSxXQUZQLEdBQUcsR0FVQztxRUFBSixFQUFFOzt1QkFQSixFQUFFO1FBQUYsRUFBRSwyQkFBUSxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQzs0QkFDN0MsT0FBTztRQUFQLE9BQU8sZ0NBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFNBQVM7eUJBQ2xFLElBQUk7UUFBSixJQUFJLDZCQUFNLEVBQUU7d0JBQ1osR0FBRztRQUFILEdBQUcsNEJBQU8sS0FBSyxDQUFDLEdBQUc7d0JBQ25CLEdBQUc7UUFBSCxHQUFHLDRCQUFPLEtBQUssQ0FBQyxHQUFHO2dDQUNuQixXQUFXO1FBQVgsV0FBVyxvQ0FBRyxLQUFLOzhCQUNuQixTQUFTO1FBQVQsU0FBUyxrQ0FBRyxLQUFLOzswQkFUZixHQUFHOztBQVdMLFFBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLFFBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLE1BQU0sRUFBTixNQUFNLEVBQUUsV0FBVyxFQUFYLFdBQVcsRUFBRSxTQUFTLEVBQVQsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN2RixRQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFQLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDekQsUUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNsQyxjQUFRLEVBQUUsTUFBTTtBQUNoQixTQUFHLEVBQUUsR0FBRztBQUNSLFdBQUssRUFBRSw0QkFBNEI7S0FDcEMsQ0FBQyxDQUFDOztBQUVILGNBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0dBQzlCOztlQXJCRyxHQUFHOztXQXVCRyxzQkFBRztBQUNYLFVBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUM1QyxnQkFBUSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFDbEUsV0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2IsYUFBSyxFQUFFLG1CQUFtQjtPQUMzQixDQUFDLENBQUM7QUFDSCxVQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUNsRCxnQkFBUSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFDbEUsV0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2IsYUFBSyxFQUFFLGNBQWM7T0FDdEIsQ0FBQyxDQUFDO0FBQ0gsVUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3RDLGdCQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztBQUNsRSxXQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7QUFDYixhQUFLLEVBQUUsV0FBVztPQUNuQixDQUFDLENBQUM7QUFDSCxVQUFJLENBQUMsVUFBVSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkMsZ0JBQVEsRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsbUJBQW1CLENBQUM7QUFDekUsV0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2IsYUFBSyxFQUFFLFlBQVk7T0FDcEIsQ0FBQyxDQUFDO0tBQ0o7OztXQUVTLHNCQUFHO0FBQ1gsVUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEMsVUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxVQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QixVQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7O1NBbkRHLEdBQUc7OztBQXVEVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcclxuY2xhc3MgSGVhZGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3Ioe2VsID0gJyNoZWFkZXInLCBvZmZzZXQgPSAnI2Fib3V0J30gPSB7fSkge1xyXG4gICAgdGhpcy5saWJJbnN0YW5jZSA9IG5ldyBIZWFkaGVzaXZlKGVsLCB7b2Zmc2V0fSk7XHJcbiAgfVxyXG5cclxuICBkZXN0cm9yeSgpIHtcclxuICAgIHRoaXMubGliSW5zdGFuY2UuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyO1xyXG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcclxuaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XHJcblxyXG5sZXQgaGVhZCA9IG5ldyBIZWFkZXIoKTtcclxubGV0IG1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbmxldCBob3RlbE1hcElzVmlzaWJsZSA9IGZhbHNlO1xyXG5sZXQgaGFuZGxlSG90ZWxNYXBUb2dnbGVDbGljayA9IGZ1bmN0aW9uKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKCFob3RlbE1hcElzVmlzaWJsZSkge1xyXG4gICAgbWFwLnNob3dIb3RlbHMoKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIG1hcC5oaWRlSG90ZWxzKCk7XHJcbiAgfVxyXG4gIGhvdGVsTWFwSXNWaXNpYmxlID0gIWhvdGVsTWFwSXNWaXNpYmxlO1xyXG59O1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUhvdGVsTWFwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVIb3RlbE1hcFRvZ2dsZUNsaWNrKTtcclxuIiwiXHJcbmNsYXNzIE1hcCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHtcclxuICAgIGVsICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKSxcclxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb3dpbmRvdy10ZW1wbGF0ZScpLmlubmVySFRNTCxcclxuICAgIHpvb20gICAgPSAxNCxcclxuICAgIGxhdCAgICAgPSBtc0dlby5sYXQsXHJcbiAgICBsbmcgICAgID0gbXNHZW8ubG5nLFxyXG4gICAgc2Nyb2xsd2hlZWwgPSBmYWxzZSxcclxuICAgIGRyYWdnYWJsZSA9IGZhbHNlXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBsZXQgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XHJcbiAgICBsZXQgbWFwID0gdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGVsLCB7IHpvb20sIGNlbnRlciwgc2Nyb2xsd2hlZWwsIGRyYWdnYWJsZSB9KTtcclxuICAgIGxldCBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coeyBjb250ZW50IH0pO1xyXG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogY2VudGVyLFxyXG4gICAgICBtYXA6IG1hcCxcclxuICAgICAgdGl0bGU6ICdNaWNyb3NlcnZpY2VzIGRheSBsb2NhdGlvbidcclxuICAgIH0pO1xyXG5cclxuICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XHJcbiAgfVxyXG5cclxuICBzaG93SG90ZWxzKCkge1xyXG4gICAgdGhpcy5zb3V0aHBsYWNlaG90ZWwgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTEuNTE4OTkzMywgLTAuMDg2NTQ0MDk5OTk5OTY5MTUpLFxyXG4gICAgICBtYXA6IHRoaXMubWFwLFxyXG4gICAgICB0aXRsZTogJ1NvdXRoIFBsYWNlIEhvdGVsJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRoZW1vbnRjYWxtbG9uZG9uY2l0eSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MS41MjA3NzkyLCAtMC4wOTA5MjMyMDAwMDAwMjAxOSksXHJcbiAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgIHRpdGxlOiAnVGhlIE1vbnRjYWxtJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1hbG1haXNvbiA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MS41MjA4OTQ1LCAtMC4xMDAyNDQ1OTk5OTk5OTYzNSksXHJcbiAgICAgIG1hcDogdGhpcy5tYXAsXHJcbiAgICAgIHRpdGxlOiAnTWFsbWFpc29uJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRyYXZlbG9kZ2UgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTEuNTIyNjkwMzk5OTk5OTksIC0wLjA4NjgwNzA5OTk5OTk4NzI2KSxcclxuICAgICAgbWFwOiB0aGlzLm1hcCxcclxuICAgICAgdGl0bGU6ICdUcmF2ZWxvZGdlJ1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBoaWRlSG90ZWxzKCkge1xyXG4gICAgdGhpcy5zb3V0aHBsYWNlaG90ZWwuc2V0TWFwKG51bGwpO1xyXG4gICAgdGhpcy50aGVtb250Y2FsbWxvbmRvbmNpdHkuc2V0TWFwKG51bGwpO1xyXG4gICAgdGhpcy5tYWxtYWlzb24uc2V0TWFwKG51bGwpO1xyXG4gICAgdGhpcy50cmF2ZWxvZGdlLnNldE1hcChudWxsKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcclxuIl19
