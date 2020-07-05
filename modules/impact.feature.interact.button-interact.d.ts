import './impact.feature.interact.interact';

export {};

declare global {
  namespace ig {
    interface ButtonGroup extends ig.Class {
      largestIndex: Vec2;

      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number, asBackButton?: boolean): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {}
    var ButtonGroup: ButtonGroupConstructor;
  }
}
