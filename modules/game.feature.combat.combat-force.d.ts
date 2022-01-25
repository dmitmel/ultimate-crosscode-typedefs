// requires impact.base.entity

export {}

declare global {
    namespace sc {
        interface CombatForce extends ig.Class {}
        interface CombatForceConstructor extends ImpactClass<CombatForce> {}
        var CombatForce: CombatForceConstructor

        interface CircleHitForce extends sc.CombatForce {
            getHitDir(entity: ig.Entity, vec: Vec2): Vec2
        }
        interface CircleHitForceConstructor extends ImpactClass<CombatForce> {}
        var CircleHitForce: CircleHitForceConstructor

        interface DirectHitForce extends sc.CombatForce {
            getHitDir(entity: ig.Entity, vec: Vec2): Vec2
        }
        interface DirectHitForceConstructor extends ImpactClass<CombatForce> {}
        var DirectHitForce: DirectHitForceConstructor
    }
}