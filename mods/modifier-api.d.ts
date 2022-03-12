export {};

declare global {
  namespace sc {
    namespace DAMAGE_MODIFIER_FUNCS {
      type DamageModifierFunction = (
        attackInfo: sc.AttackInfo,
        damageFactor: number,
        combatantRoot: ig.ENTITY.Combatant,
        shieldResult: sc.SHIELD_RESULT,
        hitIgnore: boolean,
        params: sc.CombatParams,
      ) => {
        attackInfo: AttackInfo;
        damageFactor: number;
        applyDamageCallback: (() => void) | null;
      };
    }
    var DAMAGE_MODIFIER_FUNCS: Record<string, DAMAGE_MODIFIER_FUNCS.DamageModifierFunction>;
  }
}
