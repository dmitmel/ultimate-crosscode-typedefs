import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.tab-box';

export {};

declare global {
  namespace sc {
    interface EnemyListBox extends sc.ListTabbedPane {}
    interface EnemyListBoxConstructor extends ImpactClass<EnemyListBox> {}
    var EnemyListBox: EnemyListBoxConstructor;
  }
}
