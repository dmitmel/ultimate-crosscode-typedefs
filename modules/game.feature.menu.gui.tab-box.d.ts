// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes

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
        type: number,
        sort: number,
      ): void;
    }
    interface ListTabbedPaneConstructor extends ImpactClass<ListTabbedPane> {}
    var ListTabbedPane: ListTabbedPaneConstructor;
  }
}
