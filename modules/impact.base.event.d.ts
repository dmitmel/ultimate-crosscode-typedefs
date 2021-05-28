// requires impact.base.steps

export {};

declare global {
  namespace ig {
    type EventStepBase = StepBase;
    type EventStepBaseConstructor = StepBaseConstructor;
    var EventStepBase: EventStepBaseConstructor;

    namespace EVENT_STEP {}
  }
}
