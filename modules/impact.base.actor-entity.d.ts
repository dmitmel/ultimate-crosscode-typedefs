import './impact.base.entity';
import './impact.base.action';

export {};

declare global {
  namespace ig {
    interface ActorEntity extends ig.AnimatedEntity {
      face: Vec2;
      animationFixed: boolean;

      setAction(
        this: this,
        action: ig.Action,
        keepState?: boolean | null,
        noStateReset?: boolean | null,
      ): void;
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
    var ActorEntity: ActorEntityConstructor;
  }
}
