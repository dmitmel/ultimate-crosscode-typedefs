// requires impact.base.animation.d.ts
// requires impact.base.coll-entry.d.ts
// requires impact.base.impact.d.ts

declare namespace ig {
  interface Entity extends ig.Class {}
  interface EntityConstructor extends ImpactClass<Entity> {}
  var Entity: EntityConstructor;

  interface AnimatedEntity extends ig.Entity {}
  interface AnimatedEntityConstructor extends ImpactClass<AnimatedEntity> {}
  var AnimatedEntity: AnimatedEntityConstructor;
}
