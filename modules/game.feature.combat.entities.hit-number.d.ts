// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace sc {
    interface HitNumberEntityBase extends ig.Entity {}
    interface HitNumberEntityBaseConstructor extends ImpactClass<HitNumberEntityBase> {
      new (): HitNumberEntityBase;
    }
    var HitNumberEntityBase: HitNumberEntityBaseConstructor;
  }

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
