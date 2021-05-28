// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    enum ELEMENT {
      NEUTRAL = 0,
      HEAT = 1,
      COLD = 2,
      SHOCK = 3,
      WAVE = 4,
    }

    var ELEMENT_MAX: number;
    var ELEMENT_COUNTER: Record<ELEMENT, ELEMENT>;
    var SP_REGEN_SPEED: { [maxSp: number]: number };
    var SP_REGEN_FACTOR: number;
    var HP_LOW_WARNING: number;

    namespace CombatParams {
      interface BaseParams {
        hp: number;
        attack: number;
        defense: number;
        focus: number;
        elemFactor: number[];
        statusInflict: number[];
        statusEffect: number[];
      }
    }
    interface CombatParams extends ig.Class {
      baseparams: sc.CombatParams.BaseParams;
      currentHp: number;

      getStat<K extends keyof sc.CombatParams.BaseParams>(
        this: this,
        key: K,
        noHack?: boolean | null,
      ): sc.CombatParams.BaseParams[K];
    }
    interface CombatParamsConstructor extends ImpactClass<CombatParams> {}
    var CombatParams: CombatParamsConstructor;
  }
}
