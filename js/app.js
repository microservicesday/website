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

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

var head = new _header2['default']();
var map = new _map2['default']();
var menu = new _menu2['default']();

},{"./header":1,"./map":3,"./menu":4}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Map = function Map() {
  var _ref = arguments[0] === undefined ? {} : arguments[0];

  var _ref$el = _ref.el;
  var el = _ref$el === undefined ? document.getElementById('location') : _ref$el;
  var _ref$content = _ref.content;
  var content = _ref$content === undefined ? document.getElementById('infowindow-template').innerHTML : _ref$content;
  var _ref$zoom = _ref.zoom;
  var zoom = _ref$zoom === undefined ? 13 : _ref$zoom;
  var _ref$lat = _ref.lat;
  var lat = _ref$lat === undefined ? msGeo.lat : _ref$lat;
  var _ref$lng = _ref.lng;
  var lng = _ref$lng === undefined ? msGeo.lng : _ref$lng;

  _classCallCheck(this, Map);

  var center = new google.maps.LatLng(lat, lng);
  var map = new google.maps.Map(el, { zoom: zoom, center: center });
  var infowindow = new google.maps.InfoWindow({ content: content });
  var marker = new google.maps.Marker({
    position: center,
    map: map,
    title: 'Microservices day location'
  });

  infowindow.open(map, marker);
};

module.exports = Map;

},{}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Menu = (function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.menuEl = document.getElementById('menu');
    this.snap = new Snap(this.menuEl);

    this.togglerEl = document.getElementById('toggler');

    console.log('foo');

    $('#toggler').on('click', function (e) {
      e.preventDefault();
      alert('foo');
    });
  }

  _createClass(Menu, [{
    key: 'handleToggle',
    value: function handleToggle(e) {
      e.preventDefault();
      console.log('clicked');
    }
  }]);

  return Menu;
})();

module.exports = Menu;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvam9lL0NvZGUvdG1wL21zLWRheS9qcy9oZWFkZXIuanMiLCIvVXNlcnMvam9lL0NvZGUvdG1wL21zLWRheS9qcy9tYWluLmpzIiwiL1VzZXJzL2pvZS9Db2RlL3RtcC9tcy1kYXkvanMvbWFwLmpzIiwiL1VzZXJzL2pvZS9Db2RlL3RtcC9tcy1kYXkvanMvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztJQ0NNLE1BQU07QUFFQyxXQUZQLE1BQU0sR0FFNEM7NENBQUosRUFBRTs7dUJBQXZDLEVBQUU7UUFBRixFQUFFLDJCQUFHLFNBQVM7MkJBQUUsTUFBTTtRQUFOLE1BQU0sK0JBQUcsUUFBUTs7MEJBRjFDLE1BQU07O0FBR1IsUUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxFQUFFLEVBQUUsRUFBQyxNQUFNLEVBQU4sTUFBTSxFQUFDLENBQUMsQ0FBQztHQUNqRDs7ZUFKRyxNQUFNOztXQU1GLG9CQUFHO0FBQ1QsVUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM1Qjs7O1NBUkcsTUFBTTs7O0FBWVosTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7c0JDYkwsVUFBVTs7OzttQkFDYixPQUFPOzs7O29CQUNOLFFBQVE7Ozs7QUFFekIsSUFBSSxJQUFJLEdBQUcseUJBQVksQ0FBQztBQUN4QixJQUFJLEdBQUcsR0FBRyxzQkFBUyxDQUFDO0FBQ3BCLElBQUksSUFBSSxHQUFHLHVCQUFVLENBQUM7Ozs7Ozs7SUNMaEIsR0FBRyxHQUVJLFNBRlAsR0FBRyxHQVFDOzBDQUFKLEVBQUU7O3FCQUxKLEVBQUU7TUFBRixFQUFFLDJCQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDOzBCQUM3QyxPQUFPO01BQVAsT0FBTyxnQ0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMsU0FBUzt1QkFDbEUsSUFBSTtNQUFKLElBQUksNkJBQU0sRUFBRTtzQkFDWixHQUFHO01BQUgsR0FBRyw0QkFBTyxLQUFLLENBQUMsR0FBRztzQkFDbkIsR0FBRztNQUFILEdBQUcsNEJBQU8sS0FBSyxDQUFDLEdBQUc7O3dCQVBqQixHQUFHOztBQVNMLE1BQUksTUFBTSxHQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2xELE1BQUksR0FBRyxHQUFVLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFKLElBQUksRUFBRSxNQUFNLEVBQU4sTUFBTSxFQUFFLENBQUMsQ0FBQztBQUMzRCxNQUFJLFVBQVUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsT0FBTyxFQUFQLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFDekQsTUFBSSxNQUFNLEdBQU8sSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN0QyxZQUFRLEVBQUUsTUFBTTtBQUNoQixPQUFHLEVBQUUsR0FBRztBQUNSLFNBQUssRUFBRSw0QkFBNEI7R0FDcEMsQ0FBQyxDQUFDOztBQUVILFlBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBRTlCOztBQUtILE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7Ozs7SUN6QmYsSUFBSTtBQUVHLFdBRlAsSUFBSSxHQUVNOzBCQUZWLElBQUk7O0FBR04sUUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLFFBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztBQUVsQyxRQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7O0FBRXBELFdBQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7O0FBRWxCLEtBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQyxFQUFFO0FBQ3BDLE9BQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixXQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDZCxDQUFDLENBQUM7R0FDSjs7ZUFkRyxJQUFJOztXQWdCSSxzQkFBQyxDQUFDLEVBQUU7QUFDZCxPQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsYUFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4Qjs7O1NBbkJHLElBQUk7OztBQXVCVixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmNsYXNzIEhlYWRlciB7XG5cbiAgY29uc3RydWN0b3Ioe2VsID0gJyNoZWFkZXInLCBvZmZzZXQgPSAnI2Fib3V0J30gPSB7fSkge1xuICAgIHRoaXMubGliSW5zdGFuY2UgPSBuZXcgSGVhZGhlc2l2ZShlbCwge29mZnNldH0pO1xuICB9XG5cbiAgZGVzdHJvcnkoKSB7XG4gICAgdGhpcy5saWJJbnN0YW5jZS5kZXN0cm95KCk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXInO1xuaW1wb3J0IE1hcCBmcm9tICcuL21hcCc7XG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnO1xuXG5sZXQgaGVhZCA9IG5ldyBIZWFkZXIoKTtcbmxldCBtYXAgPSBuZXcgTWFwKCk7XG5sZXQgbWVudSA9IG5ldyBNZW51KCk7XG4iLCJcbmNsYXNzIE1hcCB7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGVsICAgICAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb24nKSxcbiAgICBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZm93aW5kb3ctdGVtcGxhdGUnKS5pbm5lckhUTUwsXG4gICAgem9vbSAgICA9IDEzLFxuICAgIGxhdCAgICAgPSBtc0dlby5sYXQsXG4gICAgbG5nICAgICA9IG1zR2VvLmxuZ1xuICB9ID0ge30pIHtcbiAgICBsZXQgY2VudGVyICAgICA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcobGF0LCBsbmcpO1xuICAgIGxldCBtYXAgICAgICAgID0gbmV3IGdvb2dsZS5tYXBzLk1hcChlbCwgeyB6b29tLCBjZW50ZXIgfSk7XG4gICAgbGV0IGluZm93aW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7IGNvbnRlbnQgfSk7XG4gICAgbGV0IG1hcmtlciAgICAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgIHBvc2l0aW9uOiBjZW50ZXIsXG4gICAgICBtYXA6IG1hcCxcbiAgICAgIHRpdGxlOiAnTWljcm9zZXJ2aWNlcyBkYXkgbG9jYXRpb24nXG4gICAgfSk7XG5cbiAgICBpbmZvd2luZG93Lm9wZW4obWFwLCBtYXJrZXIpO1xuXG4gIH1cblxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwiXG5jbGFzcyBNZW51IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1lbnVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XG4gICAgdGhpcy5zbmFwID0gbmV3IFNuYXAodGhpcy5tZW51RWwpO1xuXG4gICAgdGhpcy50b2dnbGVyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlcicpO1xuXG4gICAgY29uc29sZS5sb2coJ2ZvbycpXG5cbiAgICAkKCcjdG9nZ2xlcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGFsZXJ0KCdmb28nKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVRvZ2dsZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gIH1cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE1lbnU7XG4iXX0=
