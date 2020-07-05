// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.interact.button-interact.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.tab-box.d.ts
// requires game.feature.menu.gui.social.social-misc.d.ts
// requires game.feature.interact.button-group.d.ts
// requires game.feature.menu.gui.quests.quest-entries.d.ts

declare namespace sc {
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
