// requires impact.base.image.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.trade.trade-model.d.ts

declare namespace sc {
  interface TradeToggleStats extends ig.BoxGui {
    compareItem: sc.TextGui;
    compareHelpText: sc.TextGui;
    _createContent(this: this): void;
  }
  interface TradeToggleStatsConstructor extends ImpactClass<TradeToggleStats> {}
  var TradeToggleStats: TradeToggleStatsConstructor;
}
