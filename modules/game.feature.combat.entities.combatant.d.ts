// requires game.feature.npc.entities.sc-actor
// requires game.feature.combat.combat
// requires game.feature.combat.entities.hit-number
// requires game.feature.combat.model.combat-params
// requires impact.feature.effect.effect-sheet
// requires game.feature.model.options-model
// requires impact.feature.terrain.terrain
// requires game.feature.combat.model.proxy

export {};

declare global {
  namespace sc {
    interface BasicCombatant extends sc.ActorEntity {
      getCombatantRoot(this: this): sc.BasicCombatant;
    }
    interface BasicCombatantConstructor extends ImpactClass<BasicCombatant> {}
    var BasicCombatant: BasicCombatantConstructor;
  }

  namespace ig.ENTITY {
    interface Combatant extends sc.BasicCombatant {
      params: sc.CombatParams;
    }
    interface CombatantConstructor extends ImpactClass<Combatant> {}
    var Combatant: CombatantConstructor;
  }
}
