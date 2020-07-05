import './impact.base.actor-entity';
import './impact.feature.effect.effect-sheet';

export {};

declare global {
  namespace sc {
    interface ActorEntity extends ig.ActorEntity {}
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
    var ActorEntity: ActorEntityConstructor;
  }
}
