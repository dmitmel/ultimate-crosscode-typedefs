// requires impact.base.entity
// requires impact.base.action

export {};

declare global {
  namespace ig {
    namespace ActorEntity {
      interface WalkAnims {
        idle: string;
        preMove?: string;
        move?: string;
        moveRev?: string;
        moveLeft?: string;
        run?: string;
        runRev?: string;
        runLeft?: string;
        brake?: string;
        preIdle?: string;
        jump?: string;
        fall?: string;
        hover?: string;
        preHoverMove?: string;
        hoverMove?: string;
        hoverMoveRev?: string;
        land?: string;
      }
    }

    interface ActorEntity extends ig.AnimatedEntity {
      face: Vec2;
      animationFixed: boolean;
      walkAnims: ActorEntity.WalkAnims;

      setAction(
        this: this,
        action: ig.Action,
        keepState?: Optional<boolean>,
        noStateReset?: Optional<boolean>,
      ): void;
      getTarget(this: this): Optional<ig.ActorEntity>;
      setAttribute(this: this, key: string, value: unknown): void;
      getAttribute(this: this, key: string): unknown;
      storeWalkAnims(this: this, name: string, config: ig.ActorEntity.WalkAnims): void;
      setWalkAnims(this: this, config: string | ig.ActorEntity.WalkAnims): void;
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {}
    var ActorEntity: ActorEntityConstructor;
  }
}
