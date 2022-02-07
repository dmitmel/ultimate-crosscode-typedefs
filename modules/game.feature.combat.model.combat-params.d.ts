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

      interface HealAmount {
        value: number
        absolute?: boolean
      }
    }
    interface CombatParams extends ig.Class {
      baseparams: sc.CombatParams.BaseParams;
      currentHp: number;
      defeated: boolean;

      getStat<K extends keyof sc.CombatParams.BaseParams>(
        this: this,
        key: K,
        noHack?: boolean | null,
      ): sc.CombatParams.BaseParams[K];
      getModifier<K extends keyof sc.Modifiers.KnownModifiers>(this: this, modifier: K): number;
      getModifier(this: this, modifier: string): number;
      update(this: this, a: unknown): void;
      getHpFactor(this: this): number;
      getRelativeSp(this: this): number;
      getHealAmount(this: this, amount: CombatParams.HealAmount): number;
      increaseHp(this: this, amount: number): void;
    }
    interface CombatParamsConstructor extends ImpactClass<CombatParams> {}
    var CombatParams: CombatParamsConstructor;
  }
}
