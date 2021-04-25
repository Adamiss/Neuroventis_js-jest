const AgedBrieItem = require("./AgedBrieItem");
const SulfurasItem = require("./SulfurasItem");
const BackstagePassesItem = require("./BackstagePassesItem");
const ConjuredItem = require("./ConjuredItem");
const NormalItem = require("./NormalItem");
class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    let temp = this.items.map((item) => {
      let newItem = {};
      switch (item.name) {
        case "Aged Brie":
          newItem = new AgedBrieItem(item.name, item.sellIn, item.quality);
          break;

        case "Sulfuras":
          newItem = new SulfurasItem(item.name, item.sellIn, item.quality);
          break;

        case "Backstage passes":
          newItem = new BackstagePassesItem(
            item.name,
            item.sellIn,
            item.quality
          );
          break;

        case "Conjured":
          newItem = new ConjuredItem(item.name, item.sellIn, item.quality);
          break;

        default:
          console.log(item);
          newItem = new NormalItem(item.name, item.sellIn, item.quality);
          break;
      }

      newItem.update();
      item = newItem;
      //console.log("LastSellin", item.sellIn);
      return item;
    });

    return temp;
  }
}

module.exports = {
  Shop,
};
