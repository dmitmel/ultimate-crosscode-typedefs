// requires impact.base.worker
// requires impact.base.loader

export {};

declare global {
  namespace ig {
    namespace Image {
      type Data = Exclude<CanvasImageSource, SVGImageElement>;
    }
    interface Image extends ig.Loadable {
      data: ig.Image.Data;
      width: number;
      height: number;

      loadInternal(this: this, path: string): void;
      onload(this: this): void;
      onerror(this: this): void;
      createPattern(
        this: this,
        x: number,
        y: number,
        width: number,
        height: number,
        optimization: ig.ImagePattern.OPT,
      ): ig.ImagePattern;
    }
    interface ImageConstructor extends ImpactClass<Image> {
      new (pathOrData: string): Image;
    }
    var Image: ImageConstructor;

    enum ImagePattern$OPT {
      NONE,
      REPEAT_X,
      REPEAT_Y,
      REPEAT_X_OR_Y,
      REPEAT_X_AND_Y,
    }
    namespace ImagePattern {
      type OPT = ImagePattern$OPT;
    }
    interface ImagePattern extends ig.Class {
      width: number;
    }
    interface ImagePatternConstructor extends ImpactClass<ImagePattern> {
      OPT: typeof ImagePattern$OPT;
    }
    var ImagePattern: ImagePatternConstructor;

    interface ImageAtlas extends ig.Class {
      scale: number;

      getFragment(
        this: this,
        width: number,
        height: number,
        fillCallback: () => void,
      ): ig.ImageAtlasFragment;
      _getFragment(
        this: this,
        width: number,
        height: number,
        fillCallback: () => void,
      ): ig.ImageAtlasFragment;
    }
    interface ImageAtlasConstructor extends ImpactClass<ImageAtlas> {
      new (): ImageAtlas;
    }
    var ImageAtlas: ImageAtlasConstructor;
    var imageAtlas: ig.ImageAtlas;

    interface ImageAtlasFragment extends ig.Class {
      offX: number;
      offY: number;
      width: number;
      height: number;
    }
    interface ImageAtlasFragmentConstructor extends ImpactClass<ImageAtlasFragment> {}
    var ImageAtlasFragment: ImageAtlasFragmentConstructor;
  }
}
