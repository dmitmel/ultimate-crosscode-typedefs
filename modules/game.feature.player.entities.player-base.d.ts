// requires game.feature.combat.entities.ball
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption

export {};

declare global {
  namespace sc {
    namespace PlayerBaseEntity {
      interface Guard {
        damage: number;
        timer: number;
      }
    }
    interface PlayerBaseEntity extends ig.ENTITY.Combatant {
      guard: PlayerBaseEntity.Guard;
      damageShield(this: this, damage: number): boolean;
    }
    interface PlayerBaseEntityConstructor extends ImpactClass<PlayerBaseEntity> {}
    var PlayerBaseEntity: PlayerBaseEntityConstructor;
  }
}
