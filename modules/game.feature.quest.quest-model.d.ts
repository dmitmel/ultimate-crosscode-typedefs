// requires impact.base.game.d.ts
// requires impact.base.loader.d.ts
// requires impact.feature.database.database.d.ts
// requires game.config.d.ts
// requires game.feature.quest.quest-types.d.ts
// requires game.feature.model.game-model.d.ts
// requires game.feature.combat.combat.d.ts
// requires game.feature.timers.timers-model.d.ts

declare namespace sc {
  interface QuestModel extends ig.GameAddon, sc.Model, ig.Storage.Listener {}
  interface QuestModelConstructor extends ImpactClass<QuestModel> {}
  var QuestModel: QuestModelConstructor;
  var quests: QuestModel;
}
