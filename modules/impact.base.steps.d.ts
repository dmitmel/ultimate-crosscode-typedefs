export {};

declare global {
  namespace ig {
    interface StepBase extends ig.Class {
      _nextStep: ig.StepBase | null | undefined;
      _cacheIsCleared: boolean;
      branches: Record<string, ig.StepBase> | null | undefined;

      start(this: this, ...args: unknown[]): void;
      run(this: this, ...args: unknown[]): boolean;
      getNext(this: this, ...args: unknown[]): ig.StepBase;
    }
    interface StepBaseConstructor extends ImpactClass<StepBase> {
      new (settings: unknown): StepBase;
    }
    var StepBase: StepBaseConstructor;
  }
}
