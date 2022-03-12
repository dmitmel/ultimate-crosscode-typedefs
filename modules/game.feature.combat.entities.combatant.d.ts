// requires game.feature.npc.entities.sc-actor
// requires game.feature.combat.combat
// requires game.feature.combat.entities.hit-number
// requires game.feature.combat.model.combat-params
// requires impact.feature.effect.effect-sheet
// requires game.feature.model.options-model
// requires impact.feature.terrain.terrain
// requires game.feature.combat.model.proxy

export {};

declare global {
  namespace sc {
    enum SHIELD_RESULT {
      NONE = 0,
      REGULAR = 1,
      PERFECT = 2,
      NEUTRALIZE = 3,
    }

    // TODO: What is the difference between getCombatant and getCombatantRoot?
    interface GetCombatant {
      // This can return an sc.CombatProxyEntity, the type must be more general.
      getCombatant(this: this): sc.BasicCombatant;
    }

    interface GetCombatantRoot {
      // This cannot return an sc.CombatProxyEntity, so the type can be more specific.
      getCombatantRoot(this: this): ig.ENTITY.Combatant;
    }

    namespace BasicCombatant {
      interface Combo {
        hitCombatants: sc.BasicCombatant[];
      }

      interface DamagingEntity extends sc.GetCombatant, sc.GetCombatantRoot {
        getHitCenter(this: this, entity: ig.Entity, dest: Vec3): Vec3;
        getHitVel(this: this, entity: ig.Entity, dest: Vec2): Vec2;
      }
    }
    interface BasicCombatant extends sc.ActorEntity, sc.GetCombatant, sc.GetCombatantRoot {
      combo: sc.BasicCombatant.Combo;
    }
    interface BasicCombatantConstructor extends ImpactClass<BasicCombatant> {}
    var BasicCombatant: BasicCombatantConstructor;
  }

  namespace ig.ENTITY {
    interface Combatant extends sc.BasicCombatant {
      party: sc.COMBATANT_PARTY
      params: sc.CombatParams;
      invincibleTimer: number;
      shieldsConnections: sc.CombatantShieldConnection[];

      setTarget(this: this, combatant: sc.BasicCombatant, fixed?: boolean | null): void;
      onPreDamageModification(
        this: this,
        modifications: unknown,
        damagingEntity: sc.BasicCombatant.DamagingEntity,
        attackInfo: sc.AttackInfo,
        partEntity: sc.BasicCombatant.DamagingEntity | null | undefined,
        damageResult: sc.CombatParams.DamageResult,
        shieldResult: sc.SHIELD_RESULT,
      ): boolean;
    }
    interface CombatantConstructor extends ImpactClass<Combatant> {}
    var Combatant: CombatantConstructor;
  }
}
