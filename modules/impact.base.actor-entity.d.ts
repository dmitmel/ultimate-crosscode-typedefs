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
      getTarget(this: this): ig.ActorEntity | null | undefined;
      setAttribute(this: this, key: string, value: unknown): void;
      getAttribute(this: this, key: string): unknown;
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
    var ActorEntity: ActorEntityConstructor;
  }
}
