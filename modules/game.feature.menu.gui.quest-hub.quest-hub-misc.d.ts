import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './impact.feature.interact.button-interact';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.tab-box';
import './game.feature.menu.gui.social.social-misc';
import './game.feature.interact.button-group';
import './game.feature.menu.gui.quests.quest-entries';

export {};

declare global {
  namespace sc {
    interface QuestHubListEntry extends ig.FocusGui {
      questLocation: sc.TextGui;
      rewards: sc.QuestHubRewards;
    }
    interface QuestHubListEntryConstructor extends ImpactClass<QuestHubListEntry> {
      new (questID: string, tab: sc.MENU_QUEST_HUB_TABS): QuestHubListEntry;
    }
    var QuestHubListEntry: QuestHubListEntryConstructor;

    interface QuestHubRewards extends ig.BoxGui {}
    interface QuestHubRewardsConstructor extends ImpactClass<QuestHubRewards> {}
    var QuestHubRewards: QuestHubRewardsConstructor;
  }
}
