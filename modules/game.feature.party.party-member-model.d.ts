// requires game.feature.model.base-model
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball
// requires game.feature.player.player-config
// requires game.feature.achievements.stats-model

export {};

declare global {
  namespace sc {
    interface PartyMemberModel extends ig.Class {}
    interface PartyMemberModelConstructor extends ImpactClass<PartyMemberModel> {}
    var PartyMemberModel: PartyMemberModelConstructor;
  }
}
