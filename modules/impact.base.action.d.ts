// requires impact.base.steps

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {}

    interface ActionStepBase extends StepBase {
      run(this: this, target?: ig.ActorEntity): boolean;
      start(this: this, target?: ig.ActorEntity): void;
      getNext(this: this, target?: ig.ActorEntity): ig.ActionStepBase;
    }
    interface ActionStepBaseConstructor extends ImpactClass<ActionStepBase> {}
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
