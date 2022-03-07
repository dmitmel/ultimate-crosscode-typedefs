// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.menu.gui.menu-misc
// requires game.feature.gui.widget.modal-dialog
// requires game.feature.menu.gui.shop.shop-misc

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
    interface ShopConfirmDialog extends sc.ModalButtonInteract {
      notifyRaritySell: boolean;

      createList(this: this): void;
    }
    interface ShopConfirmDialogConstructor extends ImpactClass<ShopConfirmDialog> {}
    var ShopConfirmDialog: ShopConfirmDialogConstructor;
  }
}
