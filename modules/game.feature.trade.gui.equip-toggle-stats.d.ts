// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.trade.trade-model

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
