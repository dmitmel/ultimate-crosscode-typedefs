// requires game.constants
// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    interface Projectile extends ig.AnimatedEntity {}
    interface ProjectileConstructor extends ImpactClass<Projectile> {}
    var Projectile: ProjectileConstructor;
  }
}
