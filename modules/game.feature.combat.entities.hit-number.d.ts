// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      interface HitNumber extends sc.HitNumberEntityBase {}
      interface HitNumberConstructor extends ImpactClass<HitNumber> {
        spawnHealingNumber(pos: Vec3, entity: ig.Entity, healAmount: number): void;
      }
      var HitNumber: HitNumberConstructor;
    }
  }
}
