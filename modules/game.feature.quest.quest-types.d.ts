export {};

declare global {
  namespace sc {
    interface QuestSubTaskBase extends ig.Class {}
    interface QuestSubTaskBaseConstructor extends ImpactClass<QuestSubTaskBase> {}
    var QuestSubTaskBase: QuestSubTaskBaseConstructor;

    interface Quest extends ig.Class {}
    interface QuestConstructor extends ImpactClass<Quest> {}
    var Quest: QuestConstructor;
  }
}
