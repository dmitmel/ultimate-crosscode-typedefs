// requires impact.base.steps

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {}

    interface ActionStepBase extends ig.StepBase {
      _nextStep: ig.ActionStepBase | null | undefined;
      branches: Record<string, ig.ActionStepBase> | null | undefined;

      start(this: this, target: ig.ActorEntity): void;
      run(this: this, target: ig.ActorEntity): boolean;
      getNext(this: this, target: ig.ActorEntity): ig.ActionStepBase;
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

      getVec3(value: Vec3, actor: ig.ActorEntity, dest: Vec3): Vec3;
    }
    var Action: ActionConstructor;
  }
}
