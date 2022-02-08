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
      interface Params {
        hp: number;
        attack: number;
        defense: number;
        focus: number;
      }
      type ParamName = keyof sc.CombatParams.Params;

      interface BaseParams extends Params {
        elemFactor: number[];
        statusInflict: number[];
        statusEffect: number[];
      }
    }
    interface CombatParams extends ig.Class {
      baseparams: sc.CombatParams.BaseParams;
      currentHp: number;

      getStat<K extends sc.CombatParams.ParamName>(
        this: this,
        key: K,
        noHack?: boolean | null,
      ): sc.CombatParams.Params[K];
    }
    interface CombatParamsConstructor extends ImpactClass<CombatParams> {}
    var CombatParams: CombatParamsConstructor;
  }
}
