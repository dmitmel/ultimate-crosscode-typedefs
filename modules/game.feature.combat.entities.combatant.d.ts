// requires game.feature.npc.entities.sc-actor.d.ts
// requires game.feature.combat.combat.d.ts
// requires game.feature.combat.entities.hit-number.d.ts
// requires game.feature.combat.model.combat-params.d.ts
// requires impact.feature.effect.effect-sheet.d.ts
// requires game.feature.model.options-model.d.ts
// requires impact.feature.terrain.terrain.d.ts
// requires game.feature.combat.model.proxy.d.ts

declare namespace sc {
  interface BasicCombatant extends sc.ActorEntity {}
  interface BasicCombatantConstructor extends ImpactClass<BasicCombatant> {}
  var BasicCombatant: BasicCombatantConstructor;
}

declare namespace ig.ENTITY {
  interface Combatant extends sc.BasicCombatant {}
  interface CombatantConstructor extends ImpactClass<Combatant> {}
  var Combatant: CombatantConstructor;
}
