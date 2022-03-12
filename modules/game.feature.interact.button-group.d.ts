// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    interface ButtonGroup extends ig.ButtonGroup {
      isActive(this: this): boolean;
      setCurrentFocus(this: this, x: number, y: number): void;
      focusCurrentButton(
        this: this,
        newX: number,
        newY: number,
        ignoreCallbacks?: boolean | null,
        ignoreSounds?: boolean | null,
        ignoreIfSame?: boolean | null,
        ignoreEmptyCells?: boolean | null,
      ): void;
      addSelectionCallback(this: this, callback: (focusGui: ig.FocusGui) => void): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {
      new (): sc.ButtonGroup;
    }
    var ButtonGroup: ButtonGroupConstructor;

    interface RowButtonGroup extends sc.ButtonGroup {
      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number): void;
    }
    interface RowButtonGroupConstructor extends ImpactClass<RowButtonGroup> {}
    var RowButtonGroup: RowButtonGroupConstructor;
  }
}
