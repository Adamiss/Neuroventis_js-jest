class Sulfuras {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = 0;
    this.quality = 80;
  }

  update() {
    console.log("Quality: ", this.quality);
  }
}

module.exports = Sulfuras;
