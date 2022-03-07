// requires impact.base.entity

export {};

declare global {
  namespace sc {
    interface CombatForce extends ig.Class, sc.GetCombatant, sc.GetCombatantRoot {
      combatant: sc.BasicCombatant;
      combatantRoot: ig.ENTITY.Combatant;

      update(this: this): boolean;
      isRepeating(this: this): boolean;
      onActionEndDetach(this: this): void;
      onEnd(this: this): void;
    }
    interface CombatForceConstructor extends ImpactClass<CombatForce> {
      new (combatant: sc.BasicCombatant): CombatForce;
    }
    var CombatForce: CombatForceConstructor;

    interface CircleHitForce extends sc.CombatForce {
      getHitDir(this: this, entity: ig.Entity, dest: Vec2): Vec2;
    }
    interface CircleHitForceConstructor extends ImpactClass<CombatForce> {}
    var CircleHitForce: CircleHitForceConstructor;

    interface DirectHitForce extends sc.CombatForce {
      getHitDir(this: this, entity: ig.Entity, dest: Vec2): Vec2;
    }
    interface DirectHitForceConstructor extends ImpactClass<CombatForce> {}
    var DirectHitForce: DirectHitForceConstructor;
  }
}
