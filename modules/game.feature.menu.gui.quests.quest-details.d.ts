// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.quests.quest-entries
// requires game.feature.menu.gui.quests.quest-misc
// requires game.feature.npc.gui.npc-display-gui

export {};

declare global {
  namespace sc {
    interface QuestCharacterView extends ig.BoxGui {}
    interface QuestCharacterViewConstructor extends ImpactClass<QuestCharacterView> {}
    var QuestCharacterView: QuestCharacterViewConstructor;

    interface QuestDetailsView extends sc.QuestBaseBox {
      personCharGui: sc.QuestCharacterView;
      itemsGui: ig.GuiElementBase;
      atCurLevelGui: sc.TextGui;
      currentQuest: sc.Quest;

      _setQuest(this: this, quest: sc.Quest): void;
    }
    interface QuestDetailsViewConstructor extends ImpactClass<QuestDetailsView> {}
    var QuestDetailsView: QuestDetailsViewConstructor;
  }
}
