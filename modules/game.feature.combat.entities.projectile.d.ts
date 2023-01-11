// requires game.constants
// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    interface Projectile extends ig.AnimatedEntity {
      getCombatantRoot(this: this): ig.ENTITY.Combatant;
      getElement(this: this): sc.ELEMENT;
    }
    interface ProjectileConstructor extends ImpactClass<Projectile> {}
    var Projectile: ProjectileConstructor;
  }
}
