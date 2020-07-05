import './impact.feature.gui.gui';

export {};

declare global {
  namespace ig {
    interface ImageGui extends ig.GuiElementBase {
      offsetX: number;
      offsetY: number;

      setImage(
        this: this,
        image: ig.Image,
        offsetX?: number,
        offsetY?: number,
        width?: number,
        height?: number,
      ): void;
    }
    interface ImageGuiConstructor extends ImpactClass<ImageGui> {}
    var ImageGui: ImageGuiConstructor;

    interface ColorGui extends ig.GuiElementBase {}
    interface ColorGuiConstructor extends ImpactClass<ColorGui> {}
    var ColorGui: ColorGuiConstructor;
  }
}
