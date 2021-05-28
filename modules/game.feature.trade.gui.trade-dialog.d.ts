// requires game.feature.trade.trade-model
// requires impact.base.image
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.gui
// requires game.feature.menu.gui.menu-misc

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
