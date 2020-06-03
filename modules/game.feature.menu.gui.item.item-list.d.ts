// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.item.item-sort-menu.d.ts

declare namespace sc {
  namespace ItemTabbedBox {
    interface TabButton extends ig.FocusGui {
      _largeWidth: number;
    }
    interface TabButtonConstructor extends ImpactClass<TabButton> {}
    var TabButton: TabButtonConstructor;
  }
}
