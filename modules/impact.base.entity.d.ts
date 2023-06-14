// requires impact.base.animation
// requires impact.base.coll-entry
// requires impact.base.impact

export {};

declare global {
  namespace ig {
    enum ENTITY_SPRITE_MODE {
      FLAT = 1,
      CUBE = 2,
    }

    enum ENTITY_ALIGN {
      BOTTOM = 1,
      CENTER = 2,
      TOP = 3,
      FACE = 4,
      BASE = 5,
      WALL_HIT = 6,
      FACE_BASE = 7,
    }

    namespace Entity {
      interface Settings {
        size?: Partial<Vec3>;
        mapId?: number;
      }
    }
    interface Entity extends ig.Class, ig.Vars.Accessor {
      id: number;
      uid: number;
      mapId: number;

      settings: unknown; // an empty object, appears to be unused
      coll: ig.CollEntry;
      isPlayer: boolean | undefined;
      _killed: boolean;
      sprites: ig.CubeSprite[];
      
      ballDestroyer?: boolean;

      reset(this: this, x: number, y: number, z: number, settings: ig.Entity.Settings): void;
      setPos(this: this, x: number, y: number, z: number, moveDelta?: Optional<boolean>): void;
      getAlignedPos(this: this, alignment: ig.ENTITY_ALIGN, dest?: Optional<Vec3>): Vec3;
      kill(this: this, levelChange?: Optional<boolean>): void;
      update(this: this): void;
      collideWith(this: this, entity: ig.Entity, dir: Vec2): void;
      initSprites(this: this): void;
      setSpriteCount(this: this, count: number, guiSprites?: boolean): void;
      updateSprites(this: this): void;

      // below are functions not formally defined in ig.Entity,
      // but other relevant classes do check for them.
      varsChanged?(this: this): void;
      isBallDestroyer?(this: this): boolean;
      isBallAdjust?(this: this): boolean;
      doBallAdjust?(this: this, pos: Vec3, dir: Vec2, size: Vec3, maxBounce: number): void;
      ballHit?(this: this, ball: ig.ENTITY.Ball): boolean | void;
    }
    interface EntityConstructor extends ImpactClass<Entity> {
      new (x: number, y: number, z: number, settings: ig.Entity.Settings): Entity;
    }
    var Entity: EntityConstructor;

    interface AnimatedEntity extends ig.Entity {
      animState: ig.AnimationState;
      currentAnim: string;

      setCurrentAnim(this: this, name: string, reset?: boolean, followUp?: Optional<string>, force?: boolean, callbackOnFinish?: boolean): void;
      initAnimations(this: this, sheet: ig.AnimationSheet | string | unknown): void;
    }
    interface AnimatedEntityConstructor extends ImpactClass<AnimatedEntity> {
      new (x: number, y: number, z: number, settings: ig.Entity.Settings): AnimatedEntity;
    }
    var AnimatedEntity: AnimatedEntityConstructor;
  }
}
