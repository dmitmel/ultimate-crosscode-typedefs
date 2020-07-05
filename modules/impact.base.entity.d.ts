import './impact.base.animation';
import './impact.base.coll-entry';
import './impact.base.impact';

export {};

declare global {
  namespace ig {
    interface Entity extends ig.Class {}
    interface EntityConstructor extends ImpactClass<Entity> {}
    var Entity: EntityConstructor;

    interface AnimatedEntity extends ig.Entity {}
    interface AnimatedEntityConstructor extends ImpactClass<AnimatedEntity> {}
    var AnimatedEntity: AnimatedEntityConstructor;
  }
}
