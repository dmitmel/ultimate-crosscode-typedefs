// requires impact.base.loader
// requires impact.base.animation
// requires impact.feature.effect.entities.effect
// requires impact.feature.effect.entities.effect-particle

export {};

declare global {
  namespace ig {
    interface EffectConfig<T = unknown> extends ig.Config<T> {
      _data: T;

      copy(this: this): this;
    }
    interface EffectConfigConstructor<T = unknown> extends ImpactClass<EffectConfig<T>> {
      new (data: T): EffectConfig<T>;
      loadParticleData(
        animSheet: ig.AnimationSheet,
        settings: ig.EffectStepBase.Settings,
        cacheKey: string | null | undefined,
      ): ig.ParticleData;
    }
    var EffectConfig: EffectConfigConstructor;

    interface ParticleData {
      anim: ig.BaseAnimationSet;
      followUpAnim?: ig.BaseAnimationSet | null;
      postAnim?: ig.BaseAnimationSet | null;
      state: ig.ParticleState;
      moveWithTarget: number;
      particleDuration: number;
      particleDurVariance: number;
      angleVary: number;
      randFlip: boolean;
      cancelable: boolean;
      light?: ig.LIGHT_SIZE;
    }

    interface ParticleState extends ig.Class {}
    interface ParticleStateConstructor extends ImpactClass<ParticleState> {}
    var ParticleState: ParticleStateConstructor;

    namespace EffectSheet {
      interface SpawnSettings {}
    }
    interface EffectSheet extends ig.JsonLoadable {
      spawnOnTarget(
        this: this,
        name: string,
        target: ig.Entity,
        settings?: ig.EffectSheet.SpawnSettings | null,
      ): ig.ENTITY.Effect;
      spawnFixed(
        this: this,
        name: string,
        x: number,
        y: number,
        z: number,
        target: ig.Entity,
        settings?: ig.EffectSheet.SpawnSettings | null,
      ): ig.ENTITY.Effect | null;
    }
    interface EffectSheetConstructor extends ImpactClass<EffectSheet> {
      new (pathOrData: string | unknown): ig.EffectSheet;
      cache: Record<string, ig.EffectSheet>;
    }
    var EffectSheet: EffectSheetConstructor;

    namespace EffectStepBase {
      interface Settings {
        anim: string;
        followUpAnim?: string | null;
        postAnim?: string | null;
        pAlpha?: number | null;
        pScale?: number | null;
        pRotate?: number | null;
        angleVary?: number | null;
        randFlip?: boolean | null;
        moveWithTarget?: number | null;
        pLight?: keyof typeof ig.LIGHT_SIZE | null;
        particleDuration?: number | null;
        particleDurVariance?: number | null;
        cancelable?: boolean | null;
      }
    }
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
