class NormalItem {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    this.sellIn = this.sellIn - 1;
    this.quality = this - 1;
    if (this.sellIn < 0) {
      this.sellIn = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}
module.exports = NormalItem;
