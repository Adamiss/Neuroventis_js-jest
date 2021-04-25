const Item = require("./Item");
class NormalItem extends Item {
  update() {
    this.sellIn = this.sellIn - 1;
    this.quality = this.quality - 1;
    if (this.sellIn < 0) {
      this.sellIn = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}
module.exports = NormalItem;
