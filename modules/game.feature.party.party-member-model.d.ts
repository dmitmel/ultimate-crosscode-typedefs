import './game.feature.model.base-model';
import './game.feature.combat.model.combat-params';
import './game.feature.combat.entities.ball';
import './game.feature.player.player-config';
import './game.feature.achievements.stats-model';

export {};

declare global {
  namespace sc {
    interface PartyMemberModel extends ig.Class {}
    interface PartyMemberModelConstructor extends ImpactClass<PartyMemberModel> {}
    var PartyMemberModel: PartyMemberModelConstructor;
  }
}
