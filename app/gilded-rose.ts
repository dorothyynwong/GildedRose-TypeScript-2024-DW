export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name;
   //   let itemQuality = this.items[i].quality;
   //   let itemSellin = this.items[i].sellIn;

      switch (itemName) {
        case 'Aged Brie':
          if (this.items[i].quality > 0 && this.items[i].quality < 50)
            this.items[i].quality++
          if (this.items[i].sellIn > 0)
            this.items[i].sellIn--
          if (this.items[i].sellIn < 0 && this.items[i].quality < 50)
            this.items[i].quality++
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (this.items[i].quality > 0 && this.items[i].quality < 50)
            this.items[i].quality++
          if (this.items[i].quality > 0 && this.items[i].quality < 50 && this.items[i].sellIn < 11)
            this.items[i].quality += 1
          if (this.items[i].quality > 0 && this.items[i].quality < 50 && this.items[i].sellIn < 6)
            this.items[i].quality += 1
          if (this.items[i].quality > 0 && this.items[i].quality < 50 && this.items[i].sellIn <= 0)
            this.items[i].quality += 1
          if (this.items[i].sellIn > 0)
            this.items[i].sellIn--
          if (this.items[i].sellIn < 0)
            this.items[i].quality = 0
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          if (this.items[i].quality > 0)
            this.items[i].quality--;
          if (this.items[i].sellIn > 0)
            this.items[i].sellIn--
          if (this.items[i].quality >0 && this.items[i].sellIn < 0)
            this.items[i].quality--;
          break;
      }
/*
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
           // this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          // this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                // this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                // this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        // this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                //this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
           // this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            //this.items[i].quality = this.items[i].quality + 1
          }
        }
      }*/
    }

    return this.items;
  }
}
