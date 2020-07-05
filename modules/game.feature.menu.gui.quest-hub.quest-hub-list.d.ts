import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './impact.feature.interact.button-interact';
import './game.feature.menu.gui.quest-hub.quest-hub-misc';

export {};

declare global {
  namespace sc {
    interface QuestHubList extends sc.ListTabbedPane {}
    interface QuestHubListConstructor extends ImpactClass<QuestHubList> {}
    var QuestHubList: QuestHubListConstructor;
  }
}
