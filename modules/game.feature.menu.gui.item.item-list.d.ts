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
        ninepatch: ig.NinePatch;
        text: sc.TextLike;
        icon: string;
        data: unknown;
        noIcon: boolean;
        textChild: sc.TextGui;
        _smallWidth: number;
        _largeWidth: number;

        setData(this: this, data: unknown): void;
        getButtonText(this: this): sc.TextLike;
        setText(this: this, text: sc.TextLike): void;
        setWidthToTextSize(this: this): void;
      }
      interface TabButtonConstructor extends ImpactClass<TabButton> {
        new (
          text?: sc.TextLike | null,
          icon?: string | null,
          largeWidth?: number | null,
          smallWidth?: number | null,
          noIcon?: boolean | null,
        ): TabButton;
      }
    }

    interface ItemTabbedBox extends ig.GuiElementBase {
      tabArray: sc.ItemTabbedBox.TabButton[];

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
