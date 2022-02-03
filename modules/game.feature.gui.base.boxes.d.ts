// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface BlackWhiteBox extends ig.BoxGui {}
    interface BlackWhiteBoxConstructor extends ImpactClass<BlackWhiteBox> {}
    var BlackWhiteBox: BlackWhiteBoxConstructor;

    interface CenterBoxGui extends ig.GuiElementBase {
      centerBox: sc.BlackWhiteBox;
      resize(this: this): void;
    }
    interface CenterBoxGuiConstructor extends ImpactClass<CenterBoxGui> {
      new (content: ig.GuiElementBase): CenterBoxGui
    }
    var CenterBoxGui: CenterBoxGuiConstructor;
  }
}
