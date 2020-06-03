// requires impact.base.action.d.ts
// requires impact.base.event.d.ts
// requires game.feature.npc.npc-runners.d.ts

declare namespace ig {
  namespace EVENT_STEP {
    interface DO_THE_SHAKE extends ig.EventStepBase {
      person: string;
      message: string;
      charExpression: sc.CharacterExpression;
    }
    interface DO_THE_SHAKE_CONSTRUCTOR extends ImpactClass<DO_THE_SHAKE> {}
    var DO_THE_SHAKE: DO_THE_SHAKE_CONSTRUCTOR;
  }
}
