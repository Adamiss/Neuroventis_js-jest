const Item = require("./Item");
class ConjuredItem extends Item {
  update() {
    //Decrease quality twice as fast
    this.sellIn = this.sellIn - 1;
    if (this.sellIn > 0) {
      this.quality = this.quality - 2;
    } else {
      this.quality = this.quality - 4;
    }
  }
}
module.exports = ConjuredItem;
