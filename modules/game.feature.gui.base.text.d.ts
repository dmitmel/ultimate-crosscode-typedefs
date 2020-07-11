import './impact.base.font';
import './impact.feature.gui.gui';
import './game.feature.font.font-system';

export {};

declare global {
  namespace sc {
    type TextLike = string | { toString(): string } | null;

    namespace TextGui {
      interface LevelDrawData {
        level: number;
        numberGfx: ig.Image;
        isScalable: boolean;
      }

      interface Settings extends ig.TextBlock.Settings {
        font?: ig.MultiFont;
        drawCallback?: ig.TextBlock.DrawCallback;
      }
    }
    interface TextGui extends ig.GuiElementBase {
      font: ig.MultiFont;
      text: sc.TextLike;
      textBlock: ig.TextBlock;

      onVisibilityChange(this: this, visible: boolean): void;

      setText(this: this, text: sc.TextLike): void;
    }
    interface TextGuiConstructor extends ImpactClass<TextGui> {
      new (text: sc.TextLike, settings?: sc.TextGui.Settings): TextGui;
    }
    var TextGui: TextGuiConstructor;
  }
}
