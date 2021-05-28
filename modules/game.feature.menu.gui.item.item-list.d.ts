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
      var TabButton: TabButtonConstructor;
    }
  }
}
