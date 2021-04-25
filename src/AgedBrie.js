class AgedBrie {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    console.log("Sellin", this.sellIn);
    this.sellIn = this.sellIn - 1;
    if (this.sellIn < 0) {
      this.quality = this.quality - 2;
    } else if (this.sellIn > 0) {
      this.quality = this.quality + 1;
    }

    if (this.quality >= 50) {
      // The quality is never over 50
      this.quality = 50;
    } else if (this.quality < 0) {
      // The quality is never bellow zero
      this.quality = 0;
    }

    console.log("After Sellin", this.sellIn);
    console.log(this.quality);
  }
}

module.exports = AgedBrie;
