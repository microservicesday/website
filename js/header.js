
class Header {

  constructor({el = '#header', offset = '#microservices'} = {}) {
    this.libInstance = new Headhesive(el, {offset});
  }

  destrory() {
    this.libInstance.destroy();
  }

}

module.exports = Header;
