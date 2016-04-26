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
    var offset = _ref$offset === undefined ? '#microservices' : _ref$offset;

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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvbWF0dGhld29jb25ub3IvRGVza3RvcC9saXZlLW1pY3JvZGF5LXNpdGUvd2Vic2l0ZS9qcy9oZWFkZXIuanMiLCIvVXNlcnMvbWF0dGhld29jb25ub3IvRGVza3RvcC9saXZlLW1pY3JvZGF5LXNpdGUvd2Vic2l0ZS9qcy9tYWluLmpzIiwiL1VzZXJzL21hdHRoZXdvY29ubm9yL0Rlc2t0b3AvbGl2ZS1taWNyb2RheS1zaXRlL3dlYnNpdGUvanMvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQ00sTUFBTTtBQUVDLFdBRlAsTUFBTSxHQUVvRDtxRUFBSixFQUFFOzt1QkFBL0MsRUFBRTtRQUFGLEVBQUUsMkJBQUcsU0FBUzsyQkFBRSxNQUFNO1FBQU4sTUFBTSwrQkFBRyxnQkFBZ0I7OzBCQUZsRCxNQUFNOztBQUdSLFFBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxVQUFVLENBQUMsRUFBRSxFQUFFLEVBQUMsTUFBTSxFQUFOLE1BQU0sRUFBQyxDQUFDLENBQUM7R0FDakQ7O2VBSkcsTUFBTTs7V0FNRixvQkFBRztBQUNULFVBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDNUI7OztTQVJHLE1BQU07OztBQVlaLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7Ozs7O3NCQ2JMLFVBQVU7Ozs7bUJBQ2IsT0FBTzs7OztBQUV2QixJQUFJLElBQUksR0FBRyx5QkFBWSxDQUFDO0FBQ3hCLElBQUksR0FBRyxHQUFHLHNCQUFTLENBQUM7O0FBRXBCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFDO0FBQzlCLElBQUkseUJBQXlCLEdBQUcsU0FBNUIseUJBQXlCLENBQVksQ0FBQyxFQUFFO0FBQzFDLEdBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixNQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDdEIsT0FBRyxDQUFD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Q25CLENBQUMsQ0FBQztBQUNILFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN2QyxnQkFBUSxFQUFFLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztBQUN6RSxXQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7QUFDYixhQUFLLEVBQUUsWUFBWTtPQUNwQixDQUFDLENBQUM7S0FDSjs7O1dBRVMsc0JBQUc7QUFDWCxVQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxVQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hDLFVBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLFVBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOzs7U0FuREcsR0FBRzs7O0FBdURULE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlxuY2xhc3MgSGVhZGVyIHtcblxuICBjb25zdHJ1Y3Rvcih7ZWwgPSAnI2hlYWRlcicsIG9mZnNldCA9ICcjbWljcm9zZXJ2aWNlcyd9ID0ge30pIHtcbiAgICB0aGlzLmxpYkluc3RhbmNlID0gbmV3IEhlYWRoZXNpdmUoZWwsIHtvZmZzZXR9KTtcbiAgfVxuXG4gIGRlc3Ryb3J5KCkge1xuICAgIHRoaXMubGliSW5zdGFuY2UuZGVzdHJveSgpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXI7XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyJztcbmltcG9ydCBNYXAgZnJvbSAnLi9tYXAnO1xuXG5sZXQgaGVhZCA9IG5ldyBIZWFkZXIoKTtcbmxldCBtYXAgPSBuZXcgTWFwKCk7XG5cbmxldCBob3RlbE1hcElzVmlzaWJsZSA9IGZhbHNlO1xubGV0IGhhbmRsZUhvdGVsTWFwVG9nZ2xlQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgaWYgKCFob3RlbE1hcElzVmlzaWJsZSkge1xuICAgIG1hcC5zaG93SG90ZWxzKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJykuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgfSBlbHNlIHtcbiAgICBtYXAuaGlkZUhvdGVscygpO1xuICB9XG4gIGhvdGVsTWFwSXNWaXNpYmxlID0gIWhvdGVsTWFwSXNWaXNpYmxlO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZUhvdGVsTWFwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVIb3RlbE1hcFRvZ2dsZUNsaWNrKTtcbiIsIlxuY2xhc3MgTWFwIHtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgZWwgICAgICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbicpLFxuICAgIGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5mb3dpbmRvdy10ZW1wbGF0ZScpLmlubmVySFRNTCxcbiAgICB6b29tICAgID0gMTQsXG4gICAgbGF0ICAgICA9IG1zR2VvLmxhdCxcbiAgICBsbmcgICAgID0gbXNHZW8ubG5nLFxuICAgIHNjcm9sbHdoZWVsID0gZmFsc2UsXG4gICAgZHJhZ2dhYmxlID0gZmFsc2VcbiAgfSA9IHt9KSB7XG4gICAgbGV0IGNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgIGxldCBtYXAgPSB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZWwsIHsgem9vbSwgY2VudGVyLCBzY3JvbGx3aGVlbCwgZHJhZ2dhYmxlIH0pO1xuICAgIGxldCBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coeyBjb250ZW50IH0pO1xuICAgIGxldCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBjZW50ZXIsXG4gICAgICBtYXA6IG1hcCxcbiAgICAgIHRpdGxlOiAnTWljcm9zZXJ2aWNlcyBkYXkgbG9jYXRpb24nXG4gICAgfSk7XG5cbiAgICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuICB9XG5cbiAgc2hvd0hvdGVscygpIHtcbiAgICB0aGlzLnNvdXRocGxhY2Vob3RlbCA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTEuNTE4OTkzMywgLTAuMDg2NTQ0MDk5OTk5OTY5MTUpLFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIHRpdGxlOiAnU291dGggUGxhY2UgSG90ZWwnXG4gICAgfSk7XG4gICAgdGhpcy50aGVtb250Y2FsbWxvbmRvbmNpdHkgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUxLjUyMDc3OTIsIC0wLjA5MDkyMzIwMDAwMDAyMDE5KSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICB0aXRsZTogJ1RoZSBNb250Y2FsbSdcbiAgICB9KTtcbiAgICB0aGlzLm1hbG1haXNvbiA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTEuNTIwODk0NSwgLTAuMTAwMjQ0NTk5OTk5OTk2MzUpLFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIHRpdGxlOiAnTWFsbWFpc29uJ1xuICAgIH0pO1xuICAgIHRoaXMudHJhdmVsb2RnZSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTEuNTIyNjkwMzk5OTk5OTksIC0wLjA4NjgwNzA5OTk5OTk4NzI2KSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICB0aXRsZTogJ1RyYXZlbG9kZ2UnXG4gICAgfSk7XG4gIH1cblxuICBoaWRlSG90ZWxzKCkge1xuICAgIHRoaXMuc291dGhwbGFjZWhvdGVsLnNldE1hcChudWxsKTtcbiAgICB0aGlzLnRoZW1vbnRjYWxtbG9uZG9uY2l0eS5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5tYWxtYWlzb24uc2V0TWFwKG51bGwpO1xuICAgIHRoaXMudHJhdmVsb2RnZS5zZXRNYXAobnVsbCk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiJdfQ==
