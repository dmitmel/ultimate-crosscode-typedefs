// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box

export {};

declare global {
  namespace sc {
    interface EnemyListBox extends sc.ListTabbedPane {}
    interface EnemyListBoxConstructor extends ImpactClass<EnemyListBox> {}
    var EnemyListBox: EnemyListBoxConstructor;
  }
}
