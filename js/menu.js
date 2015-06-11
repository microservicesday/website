
class Menu {

  constructor() {
    this.menuEl = document.getElementById('menu');
    this.snap = new Snap(this.menuEl);

    this.togglerEl = document.getElementById('toggler');

    console.log('foo')

    $('#toggler').on('click', function(e) {
      e.preventDefault();
      alert('foo');
    });
  }

  handleToggle(e) {
    e.preventDefault();
    console.log('clicked');
  }

}

module.exports = Menu;
