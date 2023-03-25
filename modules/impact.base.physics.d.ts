// requires impact.base.entity
// requires impact.base.coll-entry

export {};

declare global {
  namespace ig {
    interface Physics extends ig.Class {
      cellSize: number;
      _updateCount: number;
    }
    interface PhysicsConstructor extends ImpactClass<Physics> {
      new (): Physics;
    }
    var Physics: PhysicsConstructor;
  }
}
