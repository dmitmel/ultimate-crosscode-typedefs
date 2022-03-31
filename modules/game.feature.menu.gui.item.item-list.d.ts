// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.item.item-sort-menu

export {};

declare global {
  namespace sc {
    namespace ItemTabbedBox {
      interface TabButton extends ig.FocusGui {
        _largeWidth: number;
      }
      interface TabButtonConstructor extends ImpactClass<TabButton> {}
    }

    interface ItemTabbedBox extends ig.GuiElementBase {
      _createTabButton(
        this: this,
        name: string,
        icon: string,
        x: number,
        type: sc.ITEMS_TYPES,
        subType?: sc.ITEMS_EQUIP_TYPES | null,
      ): sc.ItemTabbedBox.TabButton;
    }
    interface ItemTabbedBoxConstructor extends ImpactClass<ItemTabbedBox> {
      new (): ItemTabbedBox;
      TabButton: ItemTabbedBox.TabButtonConstructor;
    }
    var ItemTabbedBox: ItemTabbedBoxConstructor;
  }
}
