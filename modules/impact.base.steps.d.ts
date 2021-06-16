export {};

declare global {
  namespace ig {
    interface StepBase extends ig.Class {
      _nextStep: ig.StepBase | null | undefined;
      _cacheIsCleared: boolean;
      branches: Record<string, ig.StepBase> | null | undefined;

      start(this: this): void;
      run(this: this): boolean;
      getNext(this: this): ig.StepBase;
    }
    interface StepBaseConstructor extends ImpactClass<StepBase> {
      new (settings: unknown): StepBase;
    }
    var StepBase: StepBaseConstructor;
  }
}
