// requires impact.base.image

export {};

declare global {
  namespace ig {
    interface CubeSprite extends ig.Class {
      setImageSrc(
        this: this,
        image: ig.Image,
        offsetX?: number | null,
        offsetY?: number | null,
      ): void;
    }
    interface CubeSpriteConstructor extends ImpactClass<CubeSprite> {}
    var CubeSprite: CubeSpriteConstructor;
  }
}
