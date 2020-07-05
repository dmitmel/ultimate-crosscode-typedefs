import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.item.item-sort-menu';

export {};

declare global {
  namespace sc {
    namespace ItemTabbedBox {
      interface TabButton extends ig.FocusGui {
        _largeWidth: number;
      }
      interface TabButtonConstructor extends ImpactClass<TabButton> {}
      var TabButton: TabButtonConstructor;
    }
  }
}
