(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Header = (function () {
  function Header() {
    var _ref = arguments[0] === undefined ? {} : arguments[0];

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
    var _ref = arguments[0] === undefined ? {} : arguments[0];

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
  }, {
    key: 'hideHotels',
    value: function hideHotels() {
      this.hotel309.setMap(null);
      this.dream.setMap(null);
      this.jade.setMap(null);
      this.washington.setMap(null);
    }
  }]);

  return Map;
})();

module.exports = Map;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9lL0NvZGUvdG1wL21pY3Jvc2VydmljZXMtZGF5LXdlYnNpdGUvanMvaGVhZGVyLmpzIiwiL1VzZXJzL2pvZS9Db2RlL3RtcC9taWNyb3NlcnZpY2VzLWRheS13ZWJzaXRlL2pzL21haW4uanMiLCIvVXNlcnMvam9lL0NvZGUvdG1wL21pY3Jvc2VydmljZXMtZGF5LXdlYnNpdGUvanMvbWFwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQ00sTUFBTTtBQUVDLFdBRlAsTUFBTSxHQUU0Qzs0Q0FBSixFQUFFOzt1QkFBdkMsRUFBRTtRQUFGLEVBQUUsMkJBQUcsU0FBUzsyQkFBRSxNQUFNO1FBQU4sTUFBTSwrQkFBRyxRQUFROzswQkFGMUMsTUFBTTs7QUFHUixRQUFJLENBQUMsV0FBVyxHQUFHLElBQUksVUFBVSxDQUFDLEVBQUUsRUFBRSxFQUFDLE1BQU0sRUFBTixNQUFNLEVBQUMsQ0FBQyxDQUFDO0dBQ2pEOztlQUpHLE1BQU07O1dBTUYsb0JBQUc7QUFDVCxVQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzVCOzs7U0FSRyxNQUFNOzs7QUFZWixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzs7Ozs7OztzQkNiTCxVQUFVOzs7O21CQUNiLE9BQU87Ozs7QUFFdkIsSUFBSSxJQUFJLEdBQUcseUJBQVksQ0FBQztBQUN4QixJQUFJLEdBQUcsR0FBRyxzQkFBUyxDQUFDOztBQUVwQixJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztBQUM5QixJQUFJLHlCQUF5QixHQUFHLFNBQTVCLHlCQUF5QixDQUFZLENBQUMsRUFBRTtBQUMxQyxHQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsTUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQ3RCLE9BQUcsQ0FBQyxVQUFVLEVBQUUs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VUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3ZDLGdCQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFDckQsV0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO0FBQ2IsYUFBSyxFQUFFLHlCQUF5QjtPQUNqQyxDQUFDLENBQUM7S0FDSjs7O1dBRVMsc0JBQUc7QUFDWCxVQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixVQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN4QixVQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixVQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5Qjs7O1NBbkRHLEdBQUc7OztBQXVEVCxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmNsYXNzIEhlYWRlciB7XG5cbiAgY29uc3RydWN0b3Ioe2VsID0gJyNoZWFkZXInLCBvZmZzZXQgPSAnI2Fib3V0J30gPSB7fSkge1xuICAgIHRoaXMubGliSW5zdGFuY2UgPSBuZXcgSGVhZGhlc2l2ZShlbCwge29mZnNldH0pO1xuICB9XG5cbiAgZGVzdHJvcnkoKSB7XG4gICAgdGhpcy5saWJJbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5cbmxldCBoZWFkID0gbmV3IEhlYWRlcigpO1xubGV0IG1hcCA9IG5ldyBNYXAoKTtcblxubGV0IGhvdGVsTWFwSXNWaXNpYmxlID0gZmFsc2U7XG5sZXQgaGFuZGxlSG90ZWxNYXBUb2dnbGVDbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoIWhvdGVsTWFwSXNWaXNpYmxlKSB7XG4gICAgbWFwLnNob3dIb3RlbHMoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKS5zY3JvbGxJbnRvVmlldygpO1xuICB9IGVsc2Uge1xuICAgIG1hcC5oaWRlSG90ZWxzKCk7XG4gIH1cbiAgaG90ZWxNYXBJc1Zpc2libGUgPSAhaG90ZWxNYXBJc1Zpc2libGU7XG59O1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlSG90ZWxNYXAnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUhvdGVsTWFwVG9nZ2xlQ2xpY2spO1xuIiwiXG5jbGFzcyBNYXAge1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBlbCAgICAgID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uJyksXG4gICAgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvd2luZG93LXRlbXBsYXRlJykuaW5uZXJIVE1MLFxuICAgIHpvb20gICAgPSAxNCxcbiAgICBsYXQgICAgID0gbXNHZW8ubGF0LFxuICAgIGxuZyAgICAgPSBtc0dlby5sbmcsXG4gICAgc2Nyb2xsd2hlZWwgPSBmYWxzZSxcbiAgICBkcmFnZ2FibGUgPSBmYWxzZVxuICB9ID0ge30pIHtcbiAgICBsZXQgY2VudGVyID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZyk7XG4gICAgbGV0IG1hcCA9IHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbCwgeyB6b29tLCBjZW50ZXIsIHNjcm9sbHdoZWVsLCBkcmFnZ2FibGUgfSk7XG4gICAgbGV0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7IGNvbnRlbnQgfSk7XG4gICAgbGV0IG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IGNlbnRlcixcbiAgICAgIG1hcDogbWFwLFxuICAgICAgdGl0bGU6ICdNaWNyb3NlcnZpY2VzIGRheSBsb2NhdGlvbidcbiAgICB9KTtcblxuICAgIGluZm93aW5kb3cub3BlbihtYXAsIG1hcmtlcik7XG4gIH1cblxuICBzaG93SG90ZWxzKCkge1xuICAgIHRoaXMuaG90ZWwzMDkgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQwLjc0MDMwMSwgLTc0LjAwMzA0OSksXG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgdGl0bGU6ICdIb3RlbCAzMDknXG4gICAgfSk7XG4gICAgdGhpcy5kcmVhbSA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDAuNzQyMDg3NywgLTc0LjAwMzYyMzUpLFxuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIHRpdGxlOiAnRHJlYW0gRG93bnRvd24nXG4gICAgfSk7XG4gICAgdGhpcy5qYWRlID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg0MC43MzYxMTMxLCAtNzMuOTk2NjM1KSxcbiAgICAgIG1hcDogdGhpcy5tYXAsXG4gICAgICB0aXRsZTogJ1RoZSBKYWRlJ1xuICAgIH0pO1xuICAgIHRoaXMud2FzaGluZ3RvbiA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDAuNzMyNSwgLTczLjk5ODY5MiksXG4gICAgICBtYXA6IHRoaXMubWFwLFxuICAgICAgdGl0bGU6ICdXYXNoaW5ndG9uIFNxdWFyZSBIb3RlbCdcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVIb3RlbHMoKSB7XG4gICAgdGhpcy5ob3RlbDMwOS5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5kcmVhbS5zZXRNYXAobnVsbCk7XG4gICAgdGhpcy5qYWRlLnNldE1hcChudWxsKTtcbiAgICB0aGlzLndhc2hpbmd0b24uc2V0TWFwKG51bGwpO1xuICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNYXA7XG4iXX0=
