// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.social.social-misc
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.quests.quest-entries

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
