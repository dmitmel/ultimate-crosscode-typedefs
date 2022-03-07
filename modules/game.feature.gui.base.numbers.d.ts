// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface NumberSize {
      x: number;
      y: number;
      width: number;
      height: number;
      dotX?: number;
      commaOffset?: number;
      dotSize?: number;
    }

    interface NUMBER_SIZE {
      NORMAL: NumberSize;
      TINY: NumberSize;
      LARGE: NumberSize;
      TEXT: NumberSize;
      SMALL: NumberSize;
      CHAIN: NumberSize;
    }
    var NUMBER_SIZE: NUMBER_SIZE;

    enum GUI_NUMBER_COLOR {
      WHITE = 0,
      RED = 1,
      GREEN = 2,
      GREY = 3,
      ORANGE = 4,
      NO_SHADOW = 5,
    }

    namespace NumberGui {
      interface Settings {
        size?: sc.NumberSize | null;
        color?: sc.GUI_NUMBER_COLOR | null;
        signed?: boolean | null;
        transitionTime?: number | null;
        transitionScale?: number | null;
        zeroAsGrey?: boolean | null;
      }
    }
    interface NumberGui extends ig.GuiElementBase {
      showPlus: boolean;
      maxNumber: number;

      setNumber(this: this, number: number, skipTransition?: boolean | null): void;
      setMaxNumber(this: this, number: number): void;
      setColor(this: this, color: sc.GUI_NUMBER_COLOR): void;
    }
    interface NumberGuiConstructor extends ImpactClass<NumberGui> {
      new (maxValue: number, settings?: sc.NumberGui.Settings): sc.NumberGui;
    }
    var NumberGui: NumberGuiConstructor;
  }
}
