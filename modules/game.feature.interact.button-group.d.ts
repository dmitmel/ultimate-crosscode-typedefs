// requires impact.feature.interact.button-interact.d.ts

declare namespace sc {
  interface ButtonGroup extends ig.ButtonGroup {}
  interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {}
  var ButtonGroup: ButtonGroupConstructor;

  interface RowButtonGroup extends sc.ButtonGroup {
    addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number): void;
  }
  interface RowButtonGroupConstructor extends ImpactClass<RowButtonGroup> {}
  var RowButtonGroup: RowButtonGroupConstructor;
}
