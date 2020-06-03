declare namespace ig {
  interface StepBase extends ig.Class {
    start(this: this): void;
  }
  interface StepBaseConstructor extends ImpactClass<StepBase> {}
  var StepBase: StepBaseConstructor;
}
