const { Shop } = require("../src/gilded_rose");
const Item = require("../src/Item");
const { Conjured } = require("../src/Conjured");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  test("should increase Aged Brie quality", () => {
    const GildedRose = new Shop([new Item("Aged Brie", 3, 1)]);
    const items = GildedRose.updateQuality();
    const brie = items.shift();
    expect(brie.sellIn).toEqual(2);
    expect(brie.quality).toEqual(2);
  });
  test("should not degrade Hand of Rag", () => {
    const GildedRose = new Shop([new Item("Sulfuras", 0, 0)]);
    const items = GildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });
  test("should increase Backstage Pass quality by default", () => {
    const GildedRose = new Shop([new Item("Backstage passes", 20, 10)]);
    const items = GildedRose.updateQuality();
    const item = items.shift();
    expect(item.sellIn).toEqual(19);
    expect(item.quality).toEqual(11);
  });
  test("should handle more than one item", () => {
    const GildedRose = new Shop([
      new Item("Conjured", 5, 10),
      new Item("Aged Brie", 5, 5),
    ]);

    const items = GildedRose.updateQuality();

    expect(items.length).toEqual(2);

    expect(items[0].quality).toEqual(8);
    expect(items[0].sellIn).toEqual(4);
    expect(items[1].quality).toEqual(6);
    expect(items[1].sellIn).toEqual(4);
  });
});
