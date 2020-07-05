import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './impact.feature.interact.press-repeater';
import './game.feature.gui.base.boxes';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.shop.shop-misc';

export {};

declare global {
  namespace sc {
    interface ShopItemButton extends sc.ListBoxButton {}
    interface ShopItemButtonConstructor extends ImpactClass<ShopItemButton> {}
    var ShopItemButton: ShopItemButtonConstructor;
  }
}
