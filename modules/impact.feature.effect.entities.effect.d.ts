import './impact.base.entity';
import './impact.base.entity-pool';

export {};

declare global {
  namespace ig.ENTITY {
    interface Effect extends ig.Entity {}
    interface EffectConstructor extends ImpactClass<Effect> {}
    var Effect: EffectConstructor;
  }
}
