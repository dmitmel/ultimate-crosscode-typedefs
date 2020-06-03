// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.interact.button-interact.d.ts
// requires game.feature.menu.gui.quest-hub.quest-hub-misc.d.ts

declare namespace sc {
  interface QuestHubList extends sc.ListTabbedPane {}
  interface QuestHubListConstructor extends ImpactClass<QuestHubList> {}
  var QuestHubList: QuestHubListConstructor;
}
