// requires impact.base.image

export {};

declare global {
  namespace ig {
    interface TextCommand {
      index: number;
      command: { brake: number } | { color: number } | { speed: number };
    }

    enum Font$ALIGN {
      LEFT,
      RIGHT,
      CENTER,
    }

    namespace Font {
      type ALIGN = Font$ALIGN;
    }
    interface Font extends ig.Image {
      widthMap: number[];
      indicesX: number[];
      indicesY: number[];
      charHeight: number;
    }
    interface FontConstructor extends ImpactClass<Font> {
      new (
        path: string,
        charHeight: number,
        firstChar?: number, // can't be null
        sizeIndex?: number | null,
        color?: string | null,
      ): Font;

      ALIGN: typeof Font$ALIGN;
    }
    var Font: FontConstructor;

    namespace MultiFont {
      interface Mapping {
        [name: string]: [number, number];
      }
    }
    interface MultiFont extends ig.Font {
      iconSets: ig.Font[];

      pushIconSet(this: this, iconSet: ig.Font): void;
      setIconSet(this: this, iconSet: ig.Font, index: number): void;
      setMapping(this: this, mapping: MultiFont.Mapping): void;
      getTextDimensions(this: this, text: string, linePadding: number): ig.TextBlock.Size;
      wrapText(
        this: this,
        text: string,
        maxWidth: number,
        linePadding: number,
        bestRatio: number | null | undefined,
        commands: ig.TextCommand[],
      ): string;
      getCharWidth(this: this, code: number): number;
    }
    interface MultiFontConstructor extends ImpactClass<MultiFont> {
      ICON_START: number;
      ICON_END: number;
    }
    var MultiFont: MultiFontConstructor;

    enum TextBlock$SPEED {
      SLOWEST,
      SLOWER,
      SLOW,
      NORMAL,
      FAST,
      FASTER,
      FASTEST,
      IMMEDIATE,
    }

    namespace TextBlock {
      interface Settings {
        speed?: ig.TextBlock.SPEED | null;
        textAlign?: ig.Font.ALIGN | null;
        maxWidth?: number | null;
        bestRatio?: number | null;
        linePadding?: number;
      }

      type SPEED = TextBlock$SPEED;

      type DrawCallback = (width: number, height: number) => void;

      interface Size {
        x: number;
        y: number;
        lines: number[];
        lineIdx: number[];
      }
    }
    interface TextBlock extends ig.Class {
      font: ig.MultiFont;
      maxWidth?: number | null;
      parsedText: string;
      commands: ig.TextCommand[];
      speed: ig.TextBlock.SPEED;
      align: ig.Font.ALIGN;
      size: ig.TextBlock.Size;
      currentLine: number;
      currentIndex: number;
      currentCmd: number;
      currentSpeed: number;
      timer: number;
      onFinish: (() => void) | null | undefined;
      prerendered: boolean;
      drawCallback: ig.TextBlock.DrawCallback | null | undefined;
      buffer: ig.ImageAtlasFragment;
      bestRatio?: number | null;
      linePadding: number;

      setText(this: this, text: sc.TextLike): void;
      setDrawCallback(this: this, drawCallback: ig.TextBlock.DrawCallback): void;
      prerender(this: this): void;
      clearPrerendered(this: this): void;
      reset(this: this): void;
      isFinished(this: this): boolean;
      update(this: this): void;
      draw(this: this, x: number, y: number): void;
    }
    interface TextBlockConstructor extends ImpactClass<TextBlock> {
      new (font: ig.MultiFont, text: sc.TextLike, settings: ig.TextBlock.Settings): TextBlock;

      SPEED: typeof TextBlock$SPEED;
    }
    var TextBlock: TextBlockConstructor;

    interface TextParser {
      parse(
        this: this,
        text: string,
        commands: ig.TextCommand[] | null,
        font: ig.MultiFont,
        ignoreCommands?: boolean | null,
      ): string;
    }
    var TextParser: TextParser;
  }
}
