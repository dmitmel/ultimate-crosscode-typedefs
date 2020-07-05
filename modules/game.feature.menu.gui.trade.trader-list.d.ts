import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.item.item-list';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.tab-box';
import './game.feature.menu.gui.trade.trade-misc';

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
