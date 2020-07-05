// requires impact.base.image.d.ts

declare namespace ig {
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
      firstChar?: number,
      sizeIndex?: number,
      color?: string,
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
      speed?: ig.TextBlock.SPEED;
      textAlign?: ig.Font.ALIGN;
      maxWidth?: number;
      bestRatio?: number;
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
    maxWidth?: number;
    parsedText: string;
    commands: ig.TextCommand[];
    speed: ig.TextBlock.SPEED;
    align: ig.Font.ALIGN;
    size: ig.TextBlock.Size;
    bestRatio?: number;
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
      ignoreCommands?: boolean,
    ): string;
  }
  var TextParser: TextParser;
}
