// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface NinePatch extends ig.Class {}
    interface NinePatchConstructor extends ImpactClass<NinePatch> {}
    var NinePatch: NinePatchConstructor;

    interface BoxGui extends ig.GuiElementBase {}
    interface BoxGuiConstructor extends ImpactClass<BoxGui> {}
    var BoxGui: BoxGuiConstructor;
  }
}
