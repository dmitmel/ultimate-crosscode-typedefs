// requires impact.feature.env-particles.env-particles
// requires game.feature.combat.entities.ball
// requires game.feature.player.entities.player-base
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.entities.player-pet
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace ig.ENTITY {
    interface Player extends sc.PlayerBaseEntity {
      proxies: Record<string, sc.ProxySpawnerBase>;
      perfectGuardCooldown: number;
      dashPerfect: boolean;
      stunEscapeDash: boolean
      regenFactor: number
      updateModelStats(this: this, a: boolean): void;
      onPerfectDash(this: this): void;
      updateSkinAura(this: this): void;
    }
    interface PlayerConstructor extends ImpactClass<Player> {}
    var Player: PlayerConstructor;
  }
}
