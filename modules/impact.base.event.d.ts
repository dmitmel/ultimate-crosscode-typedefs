// requires impact.base.steps

export {};

declare global {
  namespace ig {
    interface EventCall extends ig.Class {}
    interface EventCallConstructor extends ImpactClass<EventCall> {}
    var EventCall: EventCallConstructor;

    interface EventStepBase extends ig.StepBase {
      _nextStep: ig.EventStepBase | null | undefined;
      branches: Record<string, ig.EventStepBase> | null | undefined;

      start(this: this, data?: unknown, eventCall?: ig.EventCall): void;
      run(this: this, data?: unknown): boolean;
      getNext(this: this, data?: unknown): ig.EventStepBase;
    }
    interface EventStepBaseConstructor extends ImpactClass<EventStepBase> {}
    var EventStepBase: EventStepBaseConstructor;

    namespace EVENT_STEP {}

    namespace Event {
      interface Settings {
        name: string;
        steps: any; // TODO
      }

      interface VarObject {
        indirect?: string;
        varName?: string;
      }

      type VarExpression<T> = T | VarObject;

      type NumberExpression = VarExpression<number>;
      type BooleanExpression = VarExpression<boolean>;
      type StringExpression = VarExpression<string>;
    }
    interface Event extends ig.Class {}
    interface EventConstructor extends ImpactClass<Event> {
      new (settings: ig.Event.Settings): Event;
      
      getVec2(input: Event.VarExpression<Vec2>, dest: Vec2): Vec2;
      getVec3(input: Event.VarExpression<Vec3>, dest: Vec3): Vec3;
      getVarName(varName: string | ig.Event.VarObject): string | null;
      getExpressionValue<T>(expression: ig.Event.VarExpression<T>): T;
    }
    var Event: EventConstructor;
  }
}
