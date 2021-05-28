// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.map-interact

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
