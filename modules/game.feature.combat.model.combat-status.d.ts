// requires game.feature.combat.model.combat-params
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface CombatStatusBase extends ig.Class {
      id: number;
      statusBarEntry: string;
      offenseModifier: string;
      defenseModifier: string;
      effects: ig.EffectSheet;
      duration: number;
      charge: number;
      active: boolean;
      effectiveness: number;
      label?: string;

      getInflictValue(
        this: this,
        value: number,
        defenderParams: sc.CombatParams,
        attackInfo: sc.AttackInfo,
        shieldResult: sc.SHIELD_RESULT,
      ): number;
      _getOffensiveFactor(this: this, attackInfo: sc.AttackInfo): number;
      getEffectiveness(this: this, params: sc.CombatParams): number;
    }
    interface CombatStatusBaseConstructor extends ImpactClass<CombatStatusBase> {}
    var CombatStatusBase: CombatStatusBaseConstructor;
    var COMBAT_STATUS: sc.CombatStatusBase[];

    interface BurnStatus extends sc.CombatStatusBase {
      burnTimer: number;
    }
    interface BurnStatusConstructor extends ImpactClass<BurnStatus> {}
    var BurnStatus: BurnStatusConstructor;

    interface ChillStatus extends sc.CombatStatusBase {}
    interface ChillStatusConstructor extends ImpactClass<ChillStatus> {}
    var ChillStatus: ChillStatusConstructor;

    interface JoltStatus extends sc.CombatStatusBase {
      shockTimer: number;
    }
    interface JoltStatusConstructor extends ImpactClass<JoltStatus> {}
    var JoltStatus: JoltStatusConstructor;

    interface MarkStatus extends sc.CombatStatusBase {}
    interface MarkStatusConstructor extends ImpactClass<MarkStatus> {}
    var MarkStatus: MarkStatusConstructor;
  }
}
