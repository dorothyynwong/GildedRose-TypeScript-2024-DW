import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
 /* it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('fixme');
  });*/

  it('Quality decreases by 1 at the end of the day', () => {
    const gildedRose = new GildedRose([new Item('Elixir of the Mongoose', 5, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(4);
  });

  it('Brie increase in value by 1 if quality<50 & sellin <= 10', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(41)
  });

  it('Backstages passes increase in value by 2 if quality<50 & sellin <= 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(42)
  });

  it('Backstages passes increase in value by 3 if quality<50 & sellin <= 5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(43)
  });

  it('+5 Dexterity Vest sellIn decreases by 1', () => {
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', 5, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).to.equal(4)
  });

  it('Sulfuras, Hand of Ragnaros sellIn does not decrease', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).to.equal(5)
  });

  it('Sulfuras, Hand of Ragnaros quality does not decrease', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(80)
  });

  it('+5 Dexterity Vest sellIn < 0 & quality decreases by 2', () => {
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', -1, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(38)
  });

  it('Brie increase in value by 2 if quality<50 & sellin < 0', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', -1, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(42)
  });

  it('Backstage passes to a TAFKAL80ETC concert Quality drops to 0 once sellin < 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(0)
  });

  it('quality can never exceed 50 (for non Sulfuras items)', () =>{
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 50)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(50)
  })

  it('quality of Sulfuras is always 80', () =>{
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(80)
  })

  it('+5 Dexterity Vest quality never < 0', () => {
    const gildedRose = new GildedRose([new Item('+5 Dexterity Vest', -1, 0)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(0)
  });

  it('Backstages passes increase in value by 1 if quality<50 & sellin > 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 11, 40)])
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(41)
  });

  it('SellIn of Sulfuras doesnt change', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', -5, 80)])
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).to.equal(-5)
  });

});

/*              if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
*/