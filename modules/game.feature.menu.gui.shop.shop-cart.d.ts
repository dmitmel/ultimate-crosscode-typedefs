// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface ShopCart extends ig.BoxGui {
      checkout: sc.ButtonGui;
      credits: sc.ShopCartEntry;
      value: sc.ShopCartEntry;
      rest: sc.ShopCartEntry;
      enabled: boolean;
      init(this: this): void;
      resetNumbers(this: this, b: boolean): void;
      updateValue(this: this, b: number): void;
    }
    interface ShopCartConstructor extends ImpactClass<ShopCart> {}

    var ShopCart: ShopCartConstructor;

    interface ShopCartEntry extends ig.GuiElementBase {
      gfx: ig.Image;
      text: sc.TextGui;
      number: sc.NumberGui;
      hideSymbol: boolean;

      init(this: this, text: string): void;
      setNumber(this: this, value: number, b?: boolean): void;
    }
    interface ShopCartEntryConstructor extends ImpactClass<ShopCartEntry> {}
    var ShopCartEntry: ShopCartEntryConstructor;
  }
}
