import './impact.base.game';
import './impact.base.loader';
import './impact.feature.database.database';
import './game.config';
import './game.feature.quest.quest-types';
import './game.feature.model.game-model';
import './game.feature.combat.combat';
import './game.feature.timers.timers-model';

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
