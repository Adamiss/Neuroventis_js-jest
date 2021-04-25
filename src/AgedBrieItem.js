const Item = require("./Item");

class AgedBrieItem extends Item {
  update() {
    if (this.sellIn <= 0) {
      // SellIn never below zero
      this.sellIn = 0;
      this.quality = this.quality - 2;
    } else if (this.sellIn > 0) {
      this.sellIn = this.sellIn - 1;
      this.quality = this.quality + 1;
    }

    if (this.quality >= 50) {
      // The quality is never over 50
      this.quality = 50;
    } else if (this.quality < 0) {
      // The quality is never bellow zero
      this.quality = 0;
    }
  }
}

module.exports = AgedBrieItem;
