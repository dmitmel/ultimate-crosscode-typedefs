// requires game.feature.combat.entities.ball
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption

export {};

declare global {
  namespace sc {
    interface PlayerBaseEntity extends ig.ENTITY.Combatant {}
    interface PlayerBaseEntityConstructor extends ImpactClass<PlayerBaseEntity> {}
    var PlayerBaseEntity: PlayerBaseEntityConstructor;
  }
}
