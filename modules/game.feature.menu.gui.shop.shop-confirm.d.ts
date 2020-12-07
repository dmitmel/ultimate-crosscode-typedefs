import './impact.base.image';
import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './game.feature.menu.gui.menu-misc';
import './game.feature.gui.widget.modal-dialog';
import './game.feature.menu.gui.shop.shop-misc';

export {};

declare global {
  namespace sc {
    interface ShopConfirmEntry extends ig.GuiElementBase {
      gfx: ig.Image;
      item: sc.TextGui;
      amount: sc.NumberGui;
      price: sc.NumberGui;
    }
    interface ShopConfirmEntryConstructor extends ImpactClass<ShopConfirmEntry> {
      new (name: string, amount: number, price: number): ShopConfirmEntry;
    }
    var ShopConfirmEntry: ShopConfirmEntryConstructor;
  }
}
