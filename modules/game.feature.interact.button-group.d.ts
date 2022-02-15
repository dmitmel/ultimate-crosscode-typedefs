// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    interface ButtonGroup extends ig.ButtonGroup {
      init(this: this): void;
      isActive(this: this): boolean;
      setCurrentFocus(this: this, x: number, y: number): void;
      focusCurrentButton(this: this, x: number, y: number, a: boolean, b: boolean): void;
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
