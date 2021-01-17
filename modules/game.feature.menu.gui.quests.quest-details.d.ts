import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './impact.feature.interact.button-interact';
import './game.feature.interact.button-group';
import './game.feature.menu.gui.quests.quest-entries';
import './game.feature.menu.gui.quests.quest-misc';
import './game.feature.npc.gui.npc-display-gui';

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
