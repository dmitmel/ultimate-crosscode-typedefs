// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    interface CombatShield extends ig.Class {
      isActive(
        this: this,
        combatant: sc.BasicCombatant,
        attackingEntity: sc.BasicCombatant.DamagingEntity,
        attackInfo: sc.AttackInfo,
        receivingPart: sc.BasicCombatant.DamagingEntity | null | undefined,
        isPerfect: boolean,
      ): boolean;
    }
    interface CombatShieldConstructor extends ImpactClass<CombatShield> {}
    var CombatShield: CombatShieldConstructor;

    namespace COMBAT_SHIELDS {
      interface DIRECTIONAL extends sc.CombatShield {}
      interface DIRECTIONAL_CONSTRUCTOR extends ImpactClass<DIRECTIONAL> {}
      var DIRECIONAL: DIRECTIONAL_CONSTRUCTOR;

      interface PLAYER extends sc.COMBAT_SHIELDS.DIRECTIONAL {
        noShieldDamage: boolean;
      }
      interface PLAYER_CONSTRUCTOR extends ImpactClass<PLAYER> {}
      var PLAYER: PLAYER_CONSTRUCTOR;
    }
  }
}
