// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.menu.gui.quests.quest-misc.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.item.item-sort-menu.d.ts

declare namespace sc {
  interface QuestListBox extends ig.GuiElementBase {}
  interface QuestListBoxConstructor extends ImpactClass<QuestListBox> {}
  var QuestListBox: QuestListBoxConstructor;
}
