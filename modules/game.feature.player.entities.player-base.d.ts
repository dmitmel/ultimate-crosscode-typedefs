import './game.feature.combat.entities.ball';
import './game.feature.combat.entities.combatant';
import './game.feature.player.entities.crosshair';
import './game.feature.player.player-level-notifier';
import './game.feature.player.item-consumption';

export {};

declare global {
  namespace sc {
    interface PlayerBaseEntity extends ig.ENTITY.Combatant {}
    interface PlayerBaseEntityConstructor extends ImpactClass<PlayerBaseEntity> {}
    var PlayerBaseEntity: PlayerBaseEntityConstructor;
  }
}
