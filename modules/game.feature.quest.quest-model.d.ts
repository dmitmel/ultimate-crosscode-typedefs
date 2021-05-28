// requires impact.base.game
// requires impact.base.loader
// requires impact.feature.database.database
// requires game.config
// requires game.feature.quest.quest-types
// requires game.feature.model.game-model
// requires game.feature.combat.combat
// requires game.feature.timers.timers-model

export {};

declare global {
  namespace sc {
    interface QuestModel extends ig.GameAddon, sc.Model, ig.Storage.Listener {
      isQuestSolved(this: this, id: string): boolean;
    }
    interface QuestModelConstructor extends ImpactClass<QuestModel> {}
    var QuestModel: QuestModelConstructor;
    var quests: QuestModel;
  }
}
