// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires impact.feature.interact.press-repeater
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.shop.shop-misc

export {};

declare global {
  namespace sc {
    interface ShopItemButton extends sc.ListBoxButton {
      price: number;
      owned: sc.NumberGui;
      init(
        this: this,
        itemName: string,
        itemID: sc.Inventory.ItemID,
        itemDescription: string,
        itemAmount: number,
        cost: number,
        itemEquipLevel: number,
      ): void;
      setCountNumber(this: this, value: number, b: boolean): void;
    }
    interface ShopItemButtonConstructor extends ImpactClass<ShopItemButton> {
      new (
        itemName: string,
        itemID: sc.Inventory.ItemID,
        itemDescription: string,
        itemAmount: number,
        cost: number,
        itemEquipLevel: number,
      ): sc.ShopItemButton;
    }
    var ShopItemButton: ShopItemButtonConstructor;

    interface ShopListMenu extends sc.MenuPanel {
      _prevSortType: sc.SORT_TYPE;
      buttongroup: sc.ButtonGroup;
      list: sc.ItemListBox;
      createBuyList(this: this, b: boolean, a: boolean, d: boolean, sortType: sc.SORT_TYPE): void;
      scrapSellList(this: this, shopItems: sc.Inventory.ItemID[]): void;
      scrapBuyList(this: this, shopItems: sc.ShopModel.ShopItem[]): void;
      getRepeaterValue(this: this): void;
      updateListEntries(this: this, b?: any): void;
      changeCount(this: this, changeValue: number): void;
      getActiveElement(this: this): sc.ShopItemButton;
      playSound(this: this, direction: number, b: boolean): void;
    }
    interface ShopListMenuConstructor extends ImpactClass<ShopListMenu> {}
    var ShopListMenu: ShopListMenuConstructor;

    interface ShopPageCounter extends sc.MenuPanel {
      pageText: sc.TextGui;
      cycleLeft: sc.ButtonGui;
      cycleRight: sc.ButtonGui;
      show(this: this): void;
    }
    interface ShopPageCounterConstructor extends ImpactClass<ShopPageCounter> {}
    var ShopPageCounter: ShopPageCounterConstructor;
  }
}
