// requires impact.feature.gui.gui
// requires game.feature.gui.base.numbers
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    interface HpHudGui extends ig.GuiElementBase {
      hpNumber: sc.NumberGui;

      init(this: this, b: unknown): void;
    }
    interface HpHudGuiConstructor extends ImpactClass<HpHudGui> {}
    var HpHudGui: HpHudGuiConstructor;
  }
}
