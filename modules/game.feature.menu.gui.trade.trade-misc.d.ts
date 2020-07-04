// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.trade.gui.trade-dialog.d.ts
// requires game.feature.npc.gui.npc-display-gui.d.ts

declare namespace sc {
  interface TradeButtonBox extends ig.GuiElementBase {
    location: sc.TextGui;
  }
  interface TradeButtonBoxConstructor extends ImpactClass<TradeButtonBox> {
    new (
      trader: string,
      buttonGroup: sc.ButtonGroup,
      buttonStartIndex: number,
    ): TradeButtonBox;
  }
  var TradeButtonBox: TradeButtonBoxConstructor;

  interface TradeDetailsView extends ig.BoxGui {
    location: sc.TextGui;
    getGui: sc.TradeItemBox;
    requireGui: sc.TradeItemBox;
    _trader: string;

    setTraderData(
      this: this,
      trader: string,
      offer: any, // TODO
      buttonPos: number,
    ): void;
  }
  interface TradeDetailsViewConstructor extends ImpactClass<TradeDetailsView> {
    new (): TradeDetailsView;
  }
  var TradeDetailsView: TradeDetailsViewConstructor;
}
