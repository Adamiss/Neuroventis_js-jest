const Item = require("./Item");
class SulfurasItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, 80);
  }

  update() {
    //nothing changes, always quality 80
  }
}

module.exports = SulfurasItem;
