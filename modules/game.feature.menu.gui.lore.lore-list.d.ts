// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.lore.lore-misc

export {};

declare global {
  namespace sc {
    interface LoreListBoxNew extends sc.ListTabbedPane {}
    interface LoreListBoxNewConstructor extends ImpactClass<LoreListBoxNew> {}
    var LoreListBoxNew: LoreListBoxNewConstructor;
  }
}
