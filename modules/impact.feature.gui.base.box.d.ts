import './impact.feature.gui.gui';

export {};

declare global {
  namespace ig {
    interface BoxGui extends ig.GuiElementBase {}
    interface BoxGuiConstructor extends ImpactClass<BoxGui> {}
    var BoxGui: BoxGuiConstructor;
  }
}
