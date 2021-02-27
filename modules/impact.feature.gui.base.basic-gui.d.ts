import './impact.feature.gui.gui';

export {};

declare global {
  namespace ig {
    interface ImageGui extends ig.GuiElementBase {
      image?: ig.Image | null;
      offsetX: number;
      offsetY: number;
      renderMode?: string | null;
      flipX: boolean;
      flipY: boolean;
      pivotOverride: boolean;

      setImage(
        this: this,
        image: ig.Image,
        offsetX?: number | null,
        offsetY?: number | null,
        width?: number | null,
        height?: number | null,
      ): void;
    }
    interface ImageGuiConstructor extends ImpactClass<ImageGui> {
      new (
        image?: ig.Image | null,
        offsetX?: number | null,
        offsetY?: number | null,
        width?: number | null,
        height?: number | null,
      ): ig.ImageGui;
    }
    var ImageGui: ImageGuiConstructor;

    interface ColorGui extends ig.GuiElementBase {
      color: string;
      renderMode?: string | null;
    }
    interface ColorGuiConstructor extends ImpactClass<ColorGui> {
      new (color: string, width: number, height: number): ColorGui;
    }
    var ColorGui: ColorGuiConstructor;
  }
}
