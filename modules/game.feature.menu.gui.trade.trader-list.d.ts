// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-list
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.trade.trade-misc

export {};

declare global {
  namespace sc {
    interface TradersListBox extends sc.ListTabbedPane {}
    interface TradersListBoxConstructor extends ImpactClass<TradersListBox> {
      new (): TradersListBox;
    }
    var TradersListBox: TradersListBoxConstructor;
  }
}
