// requires impact.base.entity.d.ts
// requires impact.base.action.d.ts

declare namespace ig {
  interface ActorEntity extends ig.AnimatedEntity {}
  interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
  var ActorEntity: ActorEntityConstructor;
}
