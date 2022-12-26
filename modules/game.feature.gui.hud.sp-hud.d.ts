// requires impact.feature.gui.gui
// requires game.feature.gui.base.numbers
// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    interface SpHudGui extends ig.GuiElementBase {}
    interface SpHudGuiConstructor extends ImpactClass<SpHudGui> {
      new (params: sc.CombatParams): SpHudGui;
    }
    var SpHudGui: SpHudGuiConstructor;
  }
}
