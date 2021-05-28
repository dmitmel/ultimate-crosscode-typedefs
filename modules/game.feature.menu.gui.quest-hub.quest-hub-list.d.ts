// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.menu.gui.quest-hub.quest-hub-misc

export {};

declare global {
  namespace sc {
    interface QuestHubList extends sc.ListTabbedPane {}
    interface QuestHubListConstructor extends ImpactClass<QuestHubList> {}
    var QuestHubList: QuestHubListConstructor;
  }
}
