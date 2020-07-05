import './impact.feature.gui.gui';

export {};

declare global {
  namespace sc {
    interface NumberGui extends ig.GuiElementBase {}
    interface NumberGuiConstructor extends ImpactClass<NumberGui> {}
    var NumberGui: NumberGuiConstructor;
  }
}
