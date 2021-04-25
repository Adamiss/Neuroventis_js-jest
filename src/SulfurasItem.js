const Item = require("./Item");
class SulfurasItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, 80);
  }

  update() {
    console.log("Quality: ", this.quality);
  }
}

module.exports = SulfurasItem;
