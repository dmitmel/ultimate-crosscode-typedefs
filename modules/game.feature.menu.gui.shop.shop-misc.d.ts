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
        items: sc.ShopModel.ShopItem[],
        sortType: sc.SORT_TYPE,
      ): sc.ShopModel.ShopItem[];
    }
    var ShopHelper: ShopHelper;
  }
}
