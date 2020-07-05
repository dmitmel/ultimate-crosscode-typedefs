import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.trade.gui.trade-dialog';
import './game.feature.npc.gui.npc-display-gui';

export {};

declare global {
  namespace sc {
    interface TradeButtonBox extends ig.GuiElementBase {
      location: sc.TextGui;
    }
    interface TradeButtonBoxConstructor extends ImpactClass<TradeButtonBox> {
      new (trader: string, buttonGroup: sc.ButtonGroup, buttonStartIndex: number): TradeButtonBox;
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
}
