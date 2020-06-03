// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts

declare namespace sc {
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
      type: any,
      sort: any,
    ): void;
  }
  interface ListTabbedPaneConstructor extends ImpactClass<ListTabbedPane> {}
  var ListTabbedPane: ListTabbedPaneConstructor;
}
