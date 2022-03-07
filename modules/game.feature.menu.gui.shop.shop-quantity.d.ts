// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires impact.feature.interact.gui.focus-gui

export {};

declare global {
  namespace sc {
    namespace ShopQuantitySelect {
      type SubmitCallback = (button: sc.ShopItemButton, number: number) => void;
      type CancelCallback = (button: sc.ShopItemButton) => void;
    }
    interface ShopQuantitySelect extends ig.BoxGui {
      active: boolean;
      _max: number;
      _button: sc.ShopItemButton;

      show(
        this: this,
        button: sc.ShopItemButton,
        submitCallback: sc.ShopQuantitySelect.SubmitCallback,
        cancelCallback: sc.ShopQuantitySelect.CancelCallback,
      ): void;
    }
    interface ShopQuantitySelectConstructor extends ImpactClass<ShopQuantitySelect> {}
    var ShopQuantitySelect: ShopQuantitySelectConstructor;
  }
}
