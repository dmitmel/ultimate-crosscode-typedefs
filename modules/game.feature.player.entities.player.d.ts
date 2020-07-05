import './impact.feature.env-particles.env-particles';
import './game.feature.combat.entities.ball';
import './game.feature.player.entities.player-base';
import './game.feature.combat.entities.combatant';
import './game.feature.player.entities.crosshair';
import './game.feature.player.entities.player-pet';
import './game.feature.player.player-level-notifier';
import './game.feature.player.item-consumption';
import './game.feature.new-game.new-game-model';

export {};

declare global {
  namespace ig.ENTITY {
    interface Player extends sc.PlayerBaseEntity {}
    interface PlayerConstructor extends ImpactClass<Player> {}
    var Player: PlayerConstructor;
  }
}
