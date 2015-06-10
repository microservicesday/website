
class Header {

  constructor({el = '#header', offset = '#about'} = {}) {
    this.libInstance = new Headhesive(el, {offset});
  }

  render() {
    return _.template(this.template, this.model.toObject());
  }
}

new Header();