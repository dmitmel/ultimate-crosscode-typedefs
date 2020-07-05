import './impact.base.image';
import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';
import './game.feature.trade.trade-model';

export {};

declare global {
  namespace sc {
    interface TradeToggleStats extends ig.BoxGui {
      compareItem: sc.TextGui;
      compareHelpText: sc.TextGui;
      _createContent(this: this): void;
    }
    interface TradeToggleStatsConstructor extends ImpactClass<TradeToggleStats> {}
    var TradeToggleStats: TradeToggleStatsConstructor;
  }
}
