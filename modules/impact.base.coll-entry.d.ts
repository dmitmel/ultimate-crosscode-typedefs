export {};

declare global {
  namespace ig {
    interface CollEntry extends ig.Class {
      pos: Vec3;
      size: Vec3;
    }
    interface CollEntryConstructor extends ImpactClass<CollEntry> {
      new (entity: ig.Entity): CollEntry;
    }
    var CollEntry: CollEntryConstructor;
  }
}
