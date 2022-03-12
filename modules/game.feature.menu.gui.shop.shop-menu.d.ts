// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.shop.shop-start
// requires game.feature.menu.gui.shop.shop-list
// requires game.feature.menu.gui.shop.shop-stats
// requires game.feature.menu.gui.shop.shop-cart
// requires game.feature.menu.gui.shop.shop-quantity
// requires game.feature.menu.gui.shop.shop-confirm
// requires game.feature.control.control

export {};

declare global {
  namespace sc {
    interface ShopMenu extends sc.BaseMenu {
      cart: sc.ShopCart;

      buyItems(this: this): boolean;
      sellItems(this: this): boolean;
    }
    interface ShopMenuConstructor extends ImpactClass<ShopMenu> {
      new (): ShopMenu;
    }

    var ShopMenu: ShopMenuConstructor;
  }
}
