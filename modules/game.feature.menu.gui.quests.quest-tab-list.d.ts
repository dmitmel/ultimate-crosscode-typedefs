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
    interface QuestListBox extends ig.GuiElementBase {
      tabArray: sc.ItemTabbedBox.TabButton[];

      _createTabButton(
        this: this,
        name: string,
        x: number,
        type: sc.QUEST_LIST_TYPE,
        icon: string,
      ): sc.ItemTabbedBox.TabButton;
    }
    interface QuestListBoxConstructor extends ImpactClass<QuestListBox> {}
    var QuestListBox: QuestListBoxConstructor;
  }
}
