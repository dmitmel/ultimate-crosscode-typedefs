// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    interface Crosshair extends ig.Entity {}
    interface CrosshairConstructor extends ImpactClass<Crosshair> {}
    var Crosshair: CrosshairConstructor;

    interface CrosshairDot extends ig.AnimatedEntity {}
    interface CrosshairDotConstructor extends ImpactClass<CrosshairDot> {}
    var CrosshairDot: CrosshairDotConstructor;
  }
}
