// requires game.feature.combat.entities.ball.d.ts
// requires game.feature.combat.entities.combatant.d.ts
// requires game.feature.player.entities.crosshair.d.ts
// requires game.feature.player.player-level-notifier.d.ts
// requires game.feature.player.item-consumption.d.ts

declare namespace sc {
  interface PlayerBaseEntity extends ig.ENTITY.Combatant {}
  interface PlayerBaseEntityConstructor extends ImpactClass<PlayerBaseEntity> {}
  var PlayerBaseEntity: PlayerBaseEntityConstructor;
}
