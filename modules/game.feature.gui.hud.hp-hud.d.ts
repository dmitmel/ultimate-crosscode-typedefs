// requires impact.feature.gui.gui
// requires game.feature.gui.base.numbers
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    interface HpHudGui extends ig.GuiElementBase {
      hpNumber: sc.NumberGui;
    }
    interface HpHudGuiConstructor extends ImpactClass<HpHudGui> {
      new (params: sc.CombatParams): HpHudGui;
    }
    var HpHudGui: HpHudGuiConstructor;
  }
}
