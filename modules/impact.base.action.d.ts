// requires impact.base.steps

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {}

    type ActionStepBase = StepBase;
    type ActionStepBaseConstructor = StepBaseConstructor;
    var ActionStepBase: ActionStepBaseConstructor;

    interface Action extends ig.Class {
      name: string;
      parallelMove: boolean;
      repeating: boolean;
    }
    interface ActionConstructor extends ImpactClass<Action> {
      new (
        name: string,
        steps: any[], // TODO
        parallelMove?: boolean | null,
        repeating?: boolean | null,
      ): Action;
    }
    var Action: ActionConstructor;
  }
}
