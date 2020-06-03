// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.interact.press-repeater.d.ts
// requires game.feature.gui.base.boxes.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.shop.shop-misc.d.ts

declare namespace sc {
  interface ShopItemButton extends sc.ListBoxButton {}
  interface ShopItemButtonConstructor extends ImpactClass<ShopItemButton> {}
  var ShopItemButton: ShopItemButtonConstructor;
}
