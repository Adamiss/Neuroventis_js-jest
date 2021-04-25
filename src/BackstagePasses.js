class BackstagePasses {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  update() {
    this.sellIn = this.sellIn - 1;
    if (this.sellIn <= 0) {
      return (this.quality = 0);
    }
    if (this.sellIn <= 5) {
      return (this.quality = this.quality + 3);
    }
    if (this.sellIn <= 10) {
      return (this.quality = this.quality + 2);
    }
    return (this.quality = this.quality + 1);
  }
}

module.exports = BackstagePasses;
