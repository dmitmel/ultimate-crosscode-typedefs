// requires game.feature.inventory.inventory

export {};

declare global {
  namespace sc {
    interface ShopHelper {
      getMaxBuyable(itemID: sc.Inventory.ItemID, a: number, d: number, c: number): number;
      sortList(items: sc.ShopModel.ShopItem[], sortType: sc.SORT_TYPE): sc.ShopModel.ShopItem[];
    }
    var ShopHelper: ShopHelper;
  }
}
