// requires impact.base.game
// requires impact.base.loader

export {};

declare global {
  namespace sc {
    interface CreditsManager extends ig.GameAddon {
      speed: number;
      reset(this: this): void;
      onTeleport(this: this): void;
      onReset(this: this): void;
    }
    interface CreditsManagerConstructor extends ImpactClass<CreditsManager> {
      new (): CreditsManager;
    }
    var CreditsManager: CreditsManagerConstructor;
    var credits: CreditsManager;
  }
}
