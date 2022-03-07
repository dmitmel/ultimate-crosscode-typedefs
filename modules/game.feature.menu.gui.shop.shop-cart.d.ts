// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface ShopCart extends ig.BoxGui {
      credits: sc.ShopCartEntry;
      value: sc.ShopCartEntry;
      rest: sc.ShopCartEntry;
      checkout: sc.ButtonGui;
      enabled: boolean;

      resetNumbers(this: this, skipTransition?: boolean): void;
      updateValue(this: this, skipTransition?: boolean): void;
    }
    interface ShopCartConstructor extends ImpactClass<ShopCart> {
      new (): ShopCart;
    }

    var ShopCart: ShopCartConstructor;

    interface ShopCartEntry extends ig.GuiElementBase {
      gfx: ig.Image;
      text: sc.TextGui;
      number: sc.NumberGui;
      hideSymbol: boolean;

      setNumber(this: this, value: number, skipTransition?: boolean): void;
    }
    interface ShopCartEntryConstructor extends ImpactClass<ShopCartEntry> {
      new (text: string): ShopCartEntry;
    }
    var ShopCartEntry: ShopCartEntryConstructor;
  }
}
