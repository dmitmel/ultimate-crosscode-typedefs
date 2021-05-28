// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-list
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.botanics.botanics-misc

export {};

declare global {
  namespace sc {
    interface BotanicsListBox extends sc.ListTabbedPane {}
    interface BotanicsListBoxConstructor extends ImpactClass<BotanicsListBox> {}
    var BotanicsListBox: BotanicsListBoxConstructor;
  }
}
