// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    namespace NumberSize {
      interface SizeSettings {
        x: number;
        y: number;
        width: number;
        height: number;
        dotX?: number;
        commaOffset?: number;
        dotSize?: number;
      }
      enum KnownSizes {
        NORMAL,
        TINY,
        LARGE,
        TEXT,
        SMALL,
        CHAIN,
      }
    }

    var NUMBER_SIZE: Record<keyof typeof NumberSize.KnownSizes, NumberSize.SizeSettings>;

    enum GUI_NUMBER_COLOR {
      WHITE = 0,
      RED = 1,
      GREEN = 2,
      GREY = 3,
      ORANGE = 4,
      NO_SHADOW = 5
  }

    namespace NumberGui {
      interface Settings {
        size?: NumberSize.SizeSettings;
        color?: sc.GUI_NUMBER_COLOR;
        signed?: boolean;
        transitionTime?: number;
        transitionScale?: number;
        zeroAsGrey?: boolean;
      }
    }
    interface NumberGui extends ig.GuiElementBase {
      init(this: this, maxValue: number, settings?: sc.NumberGui.Settings): void
      setNumber(this: this, number: number, skipTransition?: boolean | null): void;
      setColor(this: this, color: sc.GUI_NUMBER_COLOR): void;
    }
    interface NumberGuiConstructor extends ImpactClass<NumberGui> {
      new (maxValue: number, settings?: sc.NumberGui.Settings): sc.NumberGui
    }
    var NumberGui: NumberGuiConstructor;
  }
}
