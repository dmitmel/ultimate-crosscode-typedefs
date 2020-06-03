// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.item.item-list.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.tab-box.d.ts
// requires game.feature.menu.gui.trade.trade-misc.d.ts

declare namespace sc {
  interface TradersListBox extends sc.ListTabbedPane {}
  interface TradersListBoxConstructor extends ImpactClass<TradersListBox> {
    new (): TradersListBox;
  }
  var TradersListBox: TradersListBoxConstructor;
}
