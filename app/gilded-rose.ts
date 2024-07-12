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

  isQualityInRange (itemQuality)  {
    if (itemQuality > 0 && itemQuality < 50)
      return true;
    else
      return false;
  }

  updateItemSellIn(item) {
    item.sellIn--;
    return item;
  }

  updateDefaultItemQuality(item){
    item.sellIn > 0 ? item.quality-- : item.quality-=2;
    return item
  }

  updateAgedQuality(item) {
    item.sellIn > 0 ? item.quality++ : item.quality+=2;
    return item
  }
  
  updateConjuredManaCake(item){
    item.sellIn > 0 ? item.quality -= 2 : item.quality-=4;
    return item;
  }

  getBackstageQualityChange(sellIn, min, max) {
    return sellIn >= min && sellIn <= max;
  }

  updateBackstageQuality(item) {
    if(this.getBackstageQualityChange(item.sellIn, -Infinity, 0)) item.quality=0;
    if(this.getBackstageQualityChange(item.sellIn, 0, 5)) item.quality+=3;
    if(this.getBackstageQualityChange(item.sellIn, 6, 10)) item.quality+=2;
    if(this.getBackstageQualityChange(item.sellIn, 11, Infinity)) item.quality++;
    return item
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const itemName = this.items[i].name;
    
      if (this.isQualityInRange(this.items[i].quality))
      {switch (itemName) {
        case 'Aged Brie':
            this.updateAgedQuality(this.items[i]);
            this.updateItemSellIn(this.items[i]);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstageQuality(this.items[i]);
          break;
        case 'Sulfuras, Hand of Ragnaros':
          break;
        case 'Conjured Mana Cake':
          this.updateConjuredManaCake(this.items[i]);
          this.updateItemSellIn(this.items[i]);
          break;
        default:
          this.updateDefaultItemQuality(this.items[i])
          this.updateItemSellIn(this.items[i]);

          break;
      }}
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
