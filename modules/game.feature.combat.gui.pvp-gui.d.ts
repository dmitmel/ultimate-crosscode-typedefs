// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.box.d.ts

declare namespace sc {
  interface PvpRoundGui extends ig.GuiElementBase {}
  interface PvpRoundGuiConstructor extends ImpactClass<PvpRoundGui> {
    new (roundNumber: number, autoContinue: number): PvpRoundGui;
  }
  var PvpRoundGui: PvpRoundGuiConstructor;
}
