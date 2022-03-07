// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    interface CombatShield extends ig.Class {
      isActive(this: this, ...args: void[]): boolean;
    }
    interface CombatShieldConstructor extends ImpactClass<CombatShield> {}
    var CombatShield: CombatShieldConstructor;

    namespace COMBAT_SHIELDS {
      //@ts-ignore
      interface DIRECTIONAL extends sc.CombatShield {
        isActive(
          this: this,
          combatant: ig.ENTITY.Combatant,
          hitForce: sc.CircleHitForce | sc.DirectHitForce,
        ): boolean;
      }
      interface DIRECTIONAL_CONSTRUCTOR extends ImpactClass<DIRECTIONAL> {}
      var DIRECIONAL: DIRECTIONAL_CONSTRUCTOR;

      //@ts-ignore
      interface PLAYER extends sc.COMBAT_SHIELDS.DIRECTIONAL {
        noShieldDamage: boolean;
        isActive(
          this: this,
          playerEntity: sc.PlayerBaseEntity,
          hitForce: sc.CombatForce & { getHitDir(entity: ig.Entity, vec: Vec2): Vec2 },
          attackInfo: sc.AttackInfo,
          f: unknown,
          isPerfect: boolean,
        ): boolean;
      }
      interface PLAYER_CONSTRUCTOR extends ImpactClass<PLAYER> {}
      var PLAYER: PLAYER_CONSTRUCTOR;
    }
  }
}
