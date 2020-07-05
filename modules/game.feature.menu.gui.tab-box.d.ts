import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';

export {};

declare global {
  namespace sc {
    interface TabbedPane extends ig.GuiElementBase {
      setPanelSize(this: this, width: number, height: number): void;
    }
    interface TabbedPaneConstructor extends ImpactClass<TabbedPane> {}
    var TabbedPane: TabbedPaneConstructor;

    interface ListTabbedPane extends sc.TabbedPane {
      bg: sc.MenuScanLines;

      onCreateListEntries(
        this: this,
        list: sc.ButtonListBox,
        buttonGroup: sc.ButtonGroup,
        type: any, // TODO
        sort: any, // TODO
      ): void;
    }
    interface ListTabbedPaneConstructor extends ImpactClass<ListTabbedPane> {}
    var ListTabbedPane: ListTabbedPaneConstructor;
  }
}
