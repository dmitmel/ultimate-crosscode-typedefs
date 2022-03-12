// requires game.feature.inventory.inventory

export {};

declare global {
  namespace sc {
    interface ShopHelper {
      getMaxBuyable(
        this: this,
        itemID: sc.ItemID,
        cartAmount: number,
        price: number,
        maxOwn: number,
      ): number;
      sortList(
        this: this,
        items: ig.Database.ShopItem[],
        sortType: sc.SORT_TYPE,
      ): ig.Database.ShopItem[];
    }
    var ShopHelper: ShopHelper;
  }
}
