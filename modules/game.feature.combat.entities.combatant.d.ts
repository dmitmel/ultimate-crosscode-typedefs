import './game.feature.npc.entities.sc-actor';
import './game.feature.combat.combat';
import './game.feature.combat.entities.hit-number';
import './game.feature.combat.model.combat-params';
import './impact.feature.effect.effect-sheet';
import './game.feature.model.options-model';
import './impact.feature.terrain.terrain';
import './game.feature.combat.model.proxy';

export {};

declare global {
  namespace sc {
    interface BasicCombatant extends sc.ActorEntity {}
    interface BasicCombatantConstructor extends ImpactClass<BasicCombatant> {}
    var BasicCombatant: BasicCombatantConstructor;
  }

  namespace ig.ENTITY {
    interface Combatant extends sc.BasicCombatant {}
    interface CombatantConstructor extends ImpactClass<Combatant> {}
    var Combatant: CombatantConstructor;
  }
}
