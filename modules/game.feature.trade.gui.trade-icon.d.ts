// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.interact.map-interact.d.ts

declare namespace sc {
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
