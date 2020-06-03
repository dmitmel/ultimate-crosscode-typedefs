// requires impact.base.font.d.ts
// requires impact.feature.gui.gui.d.ts
// requires game.feature.font.font-system.d.ts

declare namespace sc {
  type TextLike = string | { toString(): string } | null;

  namespace TextGui {
    interface LevelDrawData {
      level: number;
      numberGfx: ig.Image;
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
