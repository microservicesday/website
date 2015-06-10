
class Header {

  constructor({el = '#header', offset = '#about'} = {}) {
    this.libInstance = new Headhesive(el, {offset});
  }

  destrory() {
    this.libInstance.destroy();
  }

}

module.exports = Header;
