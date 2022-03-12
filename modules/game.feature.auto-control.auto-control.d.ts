// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface AutoControl extends ig.GameAddon {}
    interface AutoControlConstructor extends ImpactClass<AutoControl> {
      new (): AutoControl;
    }
    var AutoControl: AutoControlConstructor;
  }
}
