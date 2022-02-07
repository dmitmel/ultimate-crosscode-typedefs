// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    enum GUI_NUMBER_COLOR {
      WHITE = 0,
      RED = 1,
      GREEN = 2,
      GREY = 3,
      ORANGE = 4,
      NO_SHADOW = 5,
    }

    interface NumberGui extends ig.GuiElementBase {
      setNumber(this: this, number: number, skipTransition?: boolean | null): void;
    }
    interface NumberGuiConstructor extends ImpactClass<NumberGui> {}
    var NumberGui: NumberGuiConstructor;
  }
}
