// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.item.item-status-equip
// requires game.feature.menu.gui.item.item-status-default
// requires game.feature.menu.gui.item.item-status-buffs
// requires game.feature.menu.gui.item.item-status-favs
// requires game.feature.menu.gui.item.item-status-trade
// requires game.feature.menu.gui.item.item-list

export {};

declare global {
  namespace sc {
    interface ItemMenu extends sc.BaseMenu {
      commitHotKeysToTopBar(this: this, longTransition?: boolean): void;
    }
    interface ItemMenuConstructor extends ImpactClass<ItemMenu> {
      new (): ItemMenu;
    }
    var ItemMenu: ItemMenuConstructor;
  }
}
