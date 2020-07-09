import './game.constants';
import './impact.feature.effect.effect-sheet';
import './impact.base.entity';

export {};

declare global {
  namespace ig.ENTITY {
    interface Projectile extends ig.AnimatedEntity {}
    interface ProjectileConstructor extends ImpactClass<Projectile> {}
    var Projectile: ProjectileConstructor;
  }
}
