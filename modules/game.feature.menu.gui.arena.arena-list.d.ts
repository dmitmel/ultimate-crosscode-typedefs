// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.arena.arena-misc

export {};

declare global {
  namespace sc {
    interface ArenaCupList extends sc.ListTabbedPane {}
    interface ArenaCupListConstructor extends ImpactClass<ArenaCupList> {}
    var ArenaCupList: ArenaCupListConstructor;
  }
}
