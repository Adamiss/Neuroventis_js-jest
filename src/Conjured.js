class Conjured {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    console.log("Conjured: " + this.quality);
    this.sellIn = this.sellIn - 1;
    if (this.sellIn > 0) {
      this.quality = this.quality - 2;
    } else {
      this.quality = this.quality - 4;
    }
  }
}
module.exports = Conjured;
