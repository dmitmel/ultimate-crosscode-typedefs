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

    // A virtual interface, common methods should go here.
    interface BaseAnimationSet extends ig.Class {}

    interface SingleDirAnimationSet extends ig.BaseAnimationSet {}
    interface SingleDirAnimationSetConstructor extends ImpactClass<SingleDirAnimationSet> {}
    var SingleDirAnimationSet: SingleDirAnimationSetConstructor;

    interface MultiDirAnimationSet extends ig.BaseAnimationSet {}
    interface MultiDirAnimationSetConstructor extends ImpactClass<MultiDirAnimationSet> {}
    var MultiDirAnimationSet: MultiDirAnimationSetConstructor;

    function getRoundedFaceDir(faceX: number, faceY: number, numDirs: number, dest: Vec2): Vec2;

    interface AnimationSheet extends ig.JsonLoadable {
      anims: Array<ig.MultiDirAnimationSet | ig.SingleDirAnimationSet>;
    }
    interface AnimationSheetConstructor extends ImpactClass<AnimationSheet> {
      new (pathOrData: string | unknown): ig.AnimationSheet;
    }
    var AnimationSheet: AnimationSheetConstructor;
  }
}
