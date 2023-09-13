// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig.ENTITY {
    interface Effect extends ig.Entity {
      target: ig.Entity;
      spriteFilter: number[];

      setIgnoreSlowdown(this: this): void;
      isDone(this: this): boolean;
      spawnParticle<E extends ig.Entity, S extends ig.Entity.Settings>(
        this: this,
        entity: string | (new (x: number, y: number, z: number, settings: S) => E),
        offset?: Optional<NullablePartial<Vec3>>,
        settings?: Optional<S>,
        forceTargetPos?: Optional<boolean>,
        ): void;
      }
      interface EffectConstructor extends ImpactClass<Effect> {}
    var Effect: EffectConstructor;
  }
}
