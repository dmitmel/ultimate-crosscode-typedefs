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
    }
    interface Event extends ig.Class {}
    interface EventConstructor extends ImpactClass<Event> {
      new (settings: ig.Event.Settings): Event;
      
      getVarName(varName: string | ig.Vars.VarObject): string | null;
      getExpressionValue(expression: ig.VarValue | ig.Vars.VarObject): ig.VarValue;
    }
    var Event: EventConstructor;
  }
}
