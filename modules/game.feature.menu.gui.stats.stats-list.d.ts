// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-list
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.stats.stats-misc
// requires game.feature.menu.gui.stats.stats-gui-builds
// requires game.feature.menu.gui.stats.stats-types

export {};

declare global {
  namespace sc {
    interface StatsListBox extends sc.TabbedPane {}
    interface StatsListBoxConstructor extends ImpactClass<StatsListBox> {}
    var StatsListBox: StatsListBoxConstructor;
  }
}
