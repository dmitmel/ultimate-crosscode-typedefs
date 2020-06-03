// requires game.feature.model.base-model.d.ts
// requires game.feature.combat.model.combat-params.d.ts
// requires game.feature.combat.entities.ball.d.ts
// requires game.feature.player.player-config.d.ts
// requires game.feature.achievements.stats-model.d.ts

declare namespace sc {
  interface PartyMemberModel extends ig.Class {}
  interface PartyMemberModelConstructor extends ImpactClass<PartyMemberModel> {}
  var PartyMemberModel: PartyMemberModelConstructor;
}
