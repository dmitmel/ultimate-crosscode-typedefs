// requires game.feature.trade.trade-model.d.ts
// requires impact.base.image.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
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
