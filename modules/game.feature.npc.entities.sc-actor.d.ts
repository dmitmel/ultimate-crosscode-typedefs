// requires impact.base.actor-entity.d.ts
// requires impact.feature.effect.effect-sheet.d.ts

declare namespace sc {
  interface ActorEntity extends ig.ActorEntity {}
  interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
  var ActorEntity: ActorEntityConstructor;
}
