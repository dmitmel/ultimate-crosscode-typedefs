// requires impact.base.loader
// requires impact.base.timer
// requires impact.base.image
// requires impact.base.sprite-fx

export {};

declare global {
  namespace ig {
    interface TileSheet extends ig.Class {
      width: number;
      height: number;
      offX: number;
      offY: number;
      xCount: number;
      image: ig.Image;

      generateHit(this: this): void;
      getTileSrc(this: this, dest: Vec2, tileId: number): Vec2;
      clearCached(this: this): void;
    }
    interface TileSheetConstructor extends ImpactClass<TileSheet> {
      new (
        imageSrc: string,
        width: number,
        height: number,
        offX?: number | null,
        offY?: number | null,
        xCount?: number | null,
      ): TileSheet;
    }
    var TileSheet: TileSheetConstructor;

    interface AnimationState extends ig.Class {
      timer: number;
    }
    interface AnimationStateConstructor extends ImpactClass<AnimationState> {
      new (): AnimationState;
    }
    var AnimationState: AnimationStateConstructor;

    function getRoundedFaceDir(faceX: number, faceY: number, numDirs: number, dest: Vec2): Vec2;
  }
}
