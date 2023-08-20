// requires game.constants
// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    interface Projectile extends ig.AnimatedEntity {
      getHitCenter(this: this, entity: ig.Entity, dest?: Vec3): Vec3;
      getCombatantRoot(this: this): ig.ENTITY.Combatant;
      getElement(this: this): sc.ELEMENT;
    }
    interface ProjectileConstructor extends ImpactClass<Projectile> {}
    var Projectile: ProjectileConstructor;
  }
}
