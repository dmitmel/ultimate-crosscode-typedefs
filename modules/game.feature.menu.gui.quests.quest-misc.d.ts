// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.quests.quest-entries

export {};

declare global {
  namespace sc {
    interface QuestBaseBox extends ig.BoxGui {}
    interface QuestBaseBoxConstructor extends ImpactClass<QuestBaseBox> {}
    var QuestBaseBox: QuestBaseBoxConstructor;

    interface QuestInfoBox extends sc.QuestBaseBox {
      gfx: ig.Image;
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
}
