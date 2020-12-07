import './impact.feature.gui.gui';

export {};

declare global {
  namespace sc {
    interface NumberGui extends ig.GuiElementBase {
      setNumber(this: this, number: number, skipTransition?: boolean | null): void;
    }
    interface NumberGuiConstructor extends ImpactClass<NumberGui> {}
    var NumberGui: NumberGuiConstructor;
  }
}
