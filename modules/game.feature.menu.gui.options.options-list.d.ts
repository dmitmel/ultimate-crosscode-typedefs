// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.item.item-list.d.ts
// requires game.feature.menu.gui.options.options-types.d.ts

declare namespace sc {
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
