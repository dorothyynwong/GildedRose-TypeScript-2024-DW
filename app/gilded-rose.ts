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

      const inBoundQuality = (itemQuality) => {
        if (itemQuality>0 && itemQuality <50)
          return true;
        else
          return false;
      }

      switch (itemName) {
        case 'Aged Brie':
          if (inBoundQuality(this.items[i].quality)) {
            this.items[i].quality++
          if (this.items[i].sellIn > 0)
            this.items[i].sellIn--
          else
            this.items[i].quality++;

          }
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          if (inBoundQuality(this.items[i].quality))
          {
            if (this.items[i].sellIn >= 0) {
              if (this.items[i].sellIn < 6)
                this.items[i].quality += 3
              if (this.items[i].sellIn < 11 && this.items[i].sellIn >= 6)
                this.items[i].quality += 2
              if (this.items[i].sellIn >= 11)
                this.items[i].quality += 1
            }
            else
              this.items[i].quality = 0
          }
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        default:
          if (inBoundQuality(this.items[i].quality)) {
            if (this.items[i].sellIn > 0) {
              this.items[i].quality--;
              this.items[i].sellIn--;
            }
            else this.items[i].quality-=2;
          }
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
