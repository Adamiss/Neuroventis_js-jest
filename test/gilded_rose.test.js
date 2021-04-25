const { Shop } = require("../src/gilded_rose");
const Item = require("../src/Item");
const { Conjured } = require("../src/ConjuredItem");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });
  test("Aged Brie:should increase Aged Brie quality", () => {
    const GildedRose = new Shop([new Item("Aged Brie", 3, 1)]);
    const items = GildedRose.updateQuality();
    const brie = items.shift();
    expect(brie.sellIn).toEqual(2);
    expect(brie.quality).toEqual(2);
  });
  test("Aged Brie:should SellIn not below zero", () => {
    const GildedRose = new Shop([new Item("Aged Brie", 0, 1)]);
    const items = GildedRose.updateQuality();
    const brie = items.shift();
    expect(brie.sellIn).toEqual(0);
    expect(brie.quality).toEqual(0);
  });
  test("Aged Brie:quality should not be bigger than 50", () => {
    const GildedRose = new Shop([new Item("Aged Brie", 5, 50)]);
    const items = GildedRose.updateQuality();
    const brie = items.shift();
    expect(brie.sellIn).toEqual(4);
    expect(brie.quality).toEqual(50);
  });
  test("Sulfuras: always quality 80", () => {
    const GildedRose = new Shop([new Item("Sulfuras", 0, 0)]);
    const items = GildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });
  test("Backstage passes:should increase Backstage Pass quality by 1", () => {
    const GildedRose = new Shop([new Item("Backstage passes", 20, 10)]);
    const items = GildedRose.updateQuality();
    const item = items.shift();
    expect(item.sellIn).toEqual(19);
    expect(item.quality).toEqual(11);
  });
  test("Backstage passes:should increase Backstage Pass quality by 2", () => {
    const GildedRose = new Shop([new Item("Backstage passes", 9, 10)]);
    const items = GildedRose.updateQuality();
    const item = items.shift();
    expect(item.sellIn).toEqual(8);
    expect(item.quality).toEqual(12);
  });
  test("Backstage passes:should increase Backstage Pass quality by 3", () => {
    const GildedRose = new Shop([new Item("Backstage passes", 4, 10)]);
    const items = GildedRose.updateQuality();
    const item = items.shift();
    expect(item.sellIn).toEqual(3);
    expect(item.quality).toEqual(13);
  });
  test("Normal Item:should decrease item quality by 1", () => {
    const GildedRose = new Shop([new Item("Classic Item", 4, 10)]);
    const items = GildedRose.updateQuality();
    const item = items.shift();
    expect(item.sellIn).toEqual(3);
    expect(item.quality).toEqual(9);
  });
  test("Normal Item:quality should not be bigger than 50", () => {
    const GildedRose = new Shop([new Item("Classic Item", 4, 59)]);
    const items = GildedRose.updateQuality();
    const item = items.shift();
    expect(item.sellIn).toEqual(3);
    expect(item.quality).toEqual(50);
  });
  test("Import an array of items", () => {
    const GildedRose = new Shop([
      new Item("Classic Item", 4, 59),
      new Item("Aged Brie", 0, 1),
      new Item("Sulfuras", 0, 0),
      new Item("Backstage passes", 4, 10),
    ]);

    const items = GildedRose.updateQuality();

    expect(items[0].sellIn).toEqual(3);
    expect(items[0].quality).toEqual(50);

    expect(items[1].quality).toEqual(0);
    expect(items[1].sellIn).toEqual(0);

    expect(items[2].quality).toEqual(80);
    expect(items[2].sellIn).toEqual(0);

    expect(items[3].quality).toEqual(13);
    expect(items[3].sellIn).toEqual(3);
  });
});
