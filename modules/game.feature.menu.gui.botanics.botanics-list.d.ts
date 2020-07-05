import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.item.item-list';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.tab-box';
import './game.feature.menu.gui.botanics.botanics-misc';

export {};

declare global {
  namespace sc {
    interface BotanicsListBox extends sc.ListTabbedPane {}
    interface BotanicsListBoxConstructor extends ImpactClass<BotanicsListBox> {}
    var BotanicsListBox: BotanicsListBoxConstructor;
  }
}
