// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.interact.button-interact.d.ts
// requires game.feature.interact.button-group.d.ts
// requires game.feature.menu.gui.quests.quest-entries.d.ts

declare namespace sc {
  interface QuestBaseBox extends ig.BoxGui {}
  interface QuestBaseBoxConstructor extends ImpactClass<QuestBaseBox> {}
  var QuestBaseBox: QuestBaseBoxConstructor;

  interface QuestInfoBox extends sc.QuestBaseBox {
    locationGui: ig.ColorGui;
    locationText: sc.TextGui;
  }
  interface QuestInfoBoxConstructor extends ImpactClass<QuestInfoBox> {
    new (): QuestInfoBox;
  }
  var QuestInfoBox: QuestInfoBoxConstructor;

  interface QuestDialog extends sc.QuestBaseBox {
    itemsGui: ig.GuiElementBase;

    setQuestRewards(this: this, quest: sc.Quest, hideRewards: boolean, finished: boolean): void;
  }
  interface QuestDialogConstructor extends ImpactClass<QuestDialog> {}
  var QuestDialog: QuestDialogConstructor;
}
