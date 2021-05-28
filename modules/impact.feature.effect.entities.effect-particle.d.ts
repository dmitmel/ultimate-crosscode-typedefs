// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig.ENTITY {
    interface Particle extends ig.AnimatedEntity {}
    interface ParticleConstructor extends ImpactClass<Particle> {}
    var Particle: ParticleConstructor;

    interface CopyParticle extends ig.Entity {}
    interface CopyParticleConstructor extends ImpactClass<CopyParticle> {}
    var CopyParticle: CopyParticleConstructor;

    interface OffsetParticle extends ig.ENTITY.Particle {}
    interface OffsetParticleConstructor extends ImpactClass<OffsetParticle> {}
    var OffsetParticle: OffsetParticleConstructor;

    interface RhombusParticle extends ig.ENTITY.Particle {}
    interface RhombusParticleConstructor extends ImpactClass<RhombusParticle> {}
    var RhombusParticle: RhombusParticleConstructor;
  }
}
