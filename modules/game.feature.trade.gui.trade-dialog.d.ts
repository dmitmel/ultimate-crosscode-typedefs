import './game.feature.trade.trade-model';
import './impact.base.image';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.gui';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    interface TradeItem extends sc.ListBoxButton {}
    interface TradeItemConstructor extends ImpactClass<TradeItem> {
      // TODO name, id, description, amount, required, isTrade
      new (b: any, a: any, d: any, c: any, e: any, f: any, g: any): TradeItem;
    }
    var TradeItem: TradeItemConstructor;

    interface TradeItemBox extends ig.GuiElementBase {}
    interface TradeItemBoxConstructor extends ImpactClass<TradeItemBox> {}
    var TradeItemBox: TradeItemBoxConstructor;
  }
}
