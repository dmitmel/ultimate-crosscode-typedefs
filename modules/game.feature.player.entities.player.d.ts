// requires impact.feature.env-particles.env-particles.d.ts
// requires game.feature.combat.entities.ball.d.ts
// requires game.feature.player.entities.player-base.d.ts
// requires game.feature.combat.entities.combatant.d.ts
// requires game.feature.player.entities.crosshair.d.ts
// requires game.feature.player.entities.player-pet.d.ts
// requires game.feature.player.player-level-notifier.d.ts
// requires game.feature.player.item-consumption.d.ts
// requires game.feature.new-game.new-game-model.d.ts

declare namespace ig.ENTITY {
  interface Player extends sc.PlayerBaseEntity {}
  interface PlayerConstructor extends ImpactClass<Player> {}
  var Player: PlayerConstructor;
}
