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
    let test = this.items.map((item) => {
      let tempItem = {};
      //console.log(item.name);
      switch (item.name) {
        case "Aged Brie":
          tempItem = new AgedBrieItem(item.name, item.sellIn, item.quality);
          tempItem.update();
          item = tempItem;
          break;

        case "Sulfuras":
          tempItem = new SulfurasItem(item.name, item.sellIn, item.quality);
          tempItem.update();
          item = tempItem;
          break;

        case "Backstage passes":
          tempItem = new BackstagePassesItem(
            item.name,
            item.sellIn,
            item.quality
          );
          tempItem.update();
          item = tempItem;
          break;

        case "Conjured":
          tempItem = new ConjuredItem(item.name, item.sellIn, item.quality);
          tempItem.update();
          item = tempItem;
          break;

        default:
          tempItem = new NormalItem(item.name, item.sellIn, item.quality);
          tempItem.update();
          item = tempItem;
          break;
      }
      console.log("LastSellin", item.sellIn);
      return item;
    });
    this.items = test;
    console.log(this.items);

    // DEFAULT/;

    // for (let i = 0; i < this.items.length; i++) {
    //   if (
    //     this.items[i].name != "Aged Brie" &&
    //     this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
    //   ) {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //         this.items[i].quality = this.items[i].quality - 1;
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1;
    //       if (
    //         this.items[i].name == "Backstage passes to a TAFKAL80ETC concert"
    //       ) {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != "Aged Brie") {
    //       if (
    //         this.items[i].name != "Backstage passes to a TAFKAL80ETC concert"
    //       ) {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
    //             this.items[i].quality = this.items[i].quality - 1;
    //           }
    //         }
    //       } else {
    //         this.items[i].quality =
    //           this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1;
    //       }
    //     }
    //   }
    // }

    return test;
  }
}

module.exports = {
  Shop,
};
