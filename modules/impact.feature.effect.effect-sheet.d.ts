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
        cacheKey: Optional<string>,
      ): ig.ParticleData;
    }
    var EffectConfig: EffectConfigConstructor;

    interface ParticleData {
      anim: ig.BaseAnimationSet;
      followUpAnim?: Optional<ig.BaseAnimationSet>;
      postAnim?: Optional<ig.BaseAnimationSet>;
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
      interface EventCallback {
        onEffectEvent(this: this, effect: ig.ENTITY.Effect): void;
      }

      interface SpawnSettings {
        target?: ig.Entity;
        align?: keyof typeof ig.ENTITY_ALIGN | ig.ENTITY_ALIGN;
        target2?: ig.Entity;
        target2Align?: ig.ENTITY_ALIGN;
        spriteFilter?: number[];
        callback?: EventCallback;
        duration?: number;
        group?: string;
        angle?: Vec2;
      }
    }
    interface EffectSheet extends ig.JsonLoadable {
      spawnOnTarget(
        this: this,
        name: string,
        target: ig.Entity,
        settings?: Optional<ig.EffectSheet.SpawnSettings>,
      ): ig.ENTITY.Effect;
      spawnFixed(
        this: this,
        name: string,
        x: number,
        y: number,
        z: number,
        target: ig.Entity,
        settings?: Optional<ig.EffectSheet.SpawnSettings>,
      ): ig.ENTITY.Effect | null;
    }
    interface EffectSheetConstructor extends ImpactClass<EffectSheet> {
      new (pathOrData: string | unknown): ig.EffectSheet;
      cache: Record<string, ig.EffectSheet>;
    }
    var EffectSheet: EffectSheetConstructor;

    namespace EffectHandle {
      interface Settings {
        sheet: string;
        name: string;
      }
    }
    interface EffectHandle extends ig.Class {
      effectSheet: ig.EffectSheet;
      name: string;
      externalSheet: boolean;

      clearCached(this: this): void;
      spawnOnTarget(this: this, target: ig.Entity, settings?: Optional<ig.EffectSheet.SpawnSettings>): ig.ENTITY.Effect;
      spawnFixed(this: this, x: number, y: number, z: number, target: ig.Entity, settings?: Optional<ig.EffectSheet.SpawnSettings>): ig.ENTITY.Effect;
    }
    interface EffectHandleConstructor extends ImpactClass<EffectHandle> {
      new (settings: EffectHandle.Settings): ig.EffectHandle;
    }
    let EffectHandle: EffectHandleConstructor;


    namespace EffectStepBase {
      interface Settings {
        anim: string;
        followUpAnim?: Optional<string>;
        postAnim?: Optional<string>;
        pAlpha?: Optional<number>;
        pScale?: Optional<number>;
        pRotate?: Optional<number>;
        angleVary?: Optional<number>;
        randFlip?: Optional<boolean>;
        moveWithTarget?: Optional<number>;
        pLight?: keyof typeof ig.LIGHT_SIZE | null;
        particleDuration?: Optional<number>;
        particleDurVariance?: Optional<number>;
        cancelable?: Optional<boolean>;
      }
    }
    interface EffectStepBase extends ig.StepBase {
      _nextStep: Optional<ig.EffectStepBase>;
      branches: Optional<Record<string, ig.EffectStepBase>>;

      start(this: this, entity: ig.ENTITY.Effect): void;
      run(this: this, entity: ig.ENTITY.Effect): boolean;
      getNext(this: this, entity: ig.ENTITY.Effect): ig.EffectStepBase;
    }
    interface EffectStepBaseConstructor extends ImpactClass<EffectStepBase> {}
    var EffectStepBase: EffectStepBaseConstructor;
  }
}
