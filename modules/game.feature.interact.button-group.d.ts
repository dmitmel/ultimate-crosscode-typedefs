// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    interface ButtonGroup extends ig.ButtonGroup {
      current: Vec2;
      isActive(this: this): boolean;
      setCurrentFocus(this: this, x: number, y: number): void;
      focusCurrentButton(
        this: this,
        newX: number,
        newY: number,
        ignoreCallbacks?: Optional<boolean>,
        ignoreSounds?: Optional<boolean>,
        ignoreIfSame?: Optional<boolean>,
        ignoreEmptyCells?: Optional<boolean>,
      ): void;
      addSelectionCallback(this: this, callback: (focusGui: ig.FocusGui) => void): void;
      setMouseFocusLostCallback(this: this, callback: () => void): void;
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
