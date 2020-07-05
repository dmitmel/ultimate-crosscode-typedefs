import './impact.feature.gui.gui';
import './impact.feature.gui.base.box';
import './impact.feature.gui.base.basic-gui';
import './game.feature.interact.map-interact';

export {};

declare global {
  namespace sc {
    interface TradeIconGui extends ig.BoxGui {
      entries: Array<{
        require: any; // TODO
        gui: sc.TextGui & { tradeName: string } & sc.TextGui.LevelDrawData;
      }>;

      _createContent(this: this): void;
    }
    interface TradeIconGuiConstructor extends ImpactClass<TradeIconGui> {}
    var TradeIconGui: TradeIconGuiConstructor;
  }
}
