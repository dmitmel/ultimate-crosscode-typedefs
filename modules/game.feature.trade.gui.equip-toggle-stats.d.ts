// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.trade.trade-model

export {};

declare global {
  namespace sc {
    namespace TradeToggleStats {
      interface BaseParams {
        hp: sc.SimpleStatusDisplay;
        atk: sc.SimpleStatusDisplay;
        def: sc.SimpleStatusDisplay;
        foc: sc.SimpleStatusDisplay;
        fire: sc.SimpleStatusDisplay;
        cold: sc.SimpleStatusDisplay;
        shock: sc.SimpleStatusDisplay;
        wave: sc.SimpleStatusDisplay;
      }
    }
    interface TradeToggleStats extends ig.BoxGui {
      baseParams: sc.TradeToggleStats.BaseParams;
      compareItem: sc.TextGui;
      compareHelpText: sc.TextGui;

      _createContent(this: this): void;
    }
    interface TradeToggleStatsConstructor extends ImpactClass<TradeToggleStats> {}
    var TradeToggleStats: TradeToggleStatsConstructor;
  }
}
