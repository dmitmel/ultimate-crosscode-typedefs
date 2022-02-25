// requires impact.base.entity
// requires impact.base.action

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
      getTarget(this: this): ig.ActorEntity;
      setAttribute(this: this, attribute: string, value: any): void;
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
    var ActorEntity: ActorEntityConstructor;
  }
}
