// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.quests.quest-misc
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.item.item-sort-menu

export {};

declare global {
  namespace sc {
    interface QuestListBox extends ig.GuiElementBase {}
    interface QuestListBoxConstructor extends ImpactClass<QuestListBox> {}
    var QuestListBox: QuestListBoxConstructor;
  }
}
