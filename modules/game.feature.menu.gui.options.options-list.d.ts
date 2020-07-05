import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.item.item-list';
import './game.feature.menu.gui.options.options-types';

export {};

declare global {
  namespace sc {
    namespace OptionsTabBox {
      interface Tabs {
        general: sc.ItemTabbedBox.TabButton;
        interface: sc.ItemTabbedBox.TabButton;
        video: sc.ItemTabbedBox.TabButton;
        audio: sc.ItemTabbedBox.TabButton;
        controls: sc.ItemTabbedBox.TabButton;
        assists: sc.ItemTabbedBox.TabButton;
        arena: sc.ItemTabbedBox.TabButton;
      }
    }
    interface OptionsTabBox extends ig.GuiElementBase {
      tabs: OptionsTabBox.Tabs;
      tabArray: sc.ItemTabbedBox.TabButton[];

      _rearrangeTabs(this: this): void;
      _createTabButton(
        this: this,
        name: string,
        x: number,
        type: sc.OPTION_CATEGORY,
      ): sc.ItemTabbedBox.TabButton;
    }
    interface OptionsTabBoxConstructor extends ImpactClass<OptionsTabBox> {
      new (isLocal: boolean): OptionsTabBox;
    }
    var OptionsTabBox: OptionsTabBoxConstructor;
  }
}
