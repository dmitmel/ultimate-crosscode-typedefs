// requires impact.base.loader
// requires impact.base.animation
// requires impact.feature.effect.entities.effect
// requires impact.feature.effect.entities.effect-particle

export {};

declare global {
  namespace ig {
    interface EffectStepBase extends ig.StepBase {
      _nextStep: ig.EffectStepBase | null | undefined;
      branches: Record<string, ig.EffectStepBase> | null | undefined;

      start(this: this, entity: ig.ENTITY.Effect): void;
      run(this: this, entity: ig.ENTITY.Effect): boolean;
      getNext(this: this, entity: ig.ENTITY.Effect): ig.EffectStepBase;
    }
    interface EffectStepBaseConstructor extends ImpactClass<EffectStepBase> {}
    var EffectStepBase: EffectStepBaseConstructor;
  }
}
