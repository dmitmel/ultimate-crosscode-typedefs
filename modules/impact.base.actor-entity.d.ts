import './impact.base.entity';
import './impact.base.action';

export {};

declare global {
  namespace ig {
    interface ActorEntity extends ig.AnimatedEntity {}
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
    var ActorEntity: ActorEntityConstructor;
  }
}
