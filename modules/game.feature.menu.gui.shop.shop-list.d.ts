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
    interface ShopItemButton extends sc.ListBoxButton {}
    interface ShopItemButtonConstructor extends ImpactClass<ShopItemButton> {}
    var ShopItemButton: ShopItemButtonConstructor;
  }
}
