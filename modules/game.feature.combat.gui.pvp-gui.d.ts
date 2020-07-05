import './impact.feature.gui.gui';
import './impact.feature.gui.base.box';

export {};

declare global {
  namespace sc {
    interface PvpRoundGui extends ig.GuiElementBase {}
    interface PvpRoundGuiConstructor extends ImpactClass<PvpRoundGui> {
      new (roundNumber: number, autoContinue: number): PvpRoundGui;
    }
    var PvpRoundGui: PvpRoundGuiConstructor;
  }
}
