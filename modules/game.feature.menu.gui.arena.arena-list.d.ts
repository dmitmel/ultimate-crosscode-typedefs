// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.tab-box.d.ts
// requires game.feature.menu.gui.arena.arena-misc.d.ts

declare namespace sc {
  interface ArenaCupList extends sc.ListTabbedPane {}
  interface ArenaCupListConstructor extends ImpactClass<ArenaCupList> {}
  var ArenaCupList: ArenaCupListConstructor;
}
