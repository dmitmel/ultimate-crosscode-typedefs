// requires impact.feature.interact.interact

export {};

declare global {
  namespace ig {
    interface ButtonGroup extends ig.Class {
      pressCallbacks: Array<(button?: ig.FocusGui, fromMouse?: boolean) => void>;
      selectionCallbacks: Array<(button?: ig.FocusGui) => void>;
      largestIndex: Vec2;

      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number, asBackButton?: boolean): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {}
    var ButtonGroup: ButtonGroupConstructor;

    interface ButtonInteractEntry extends ig.InteractEntry {}
    interface ButtonInteractEntryConstructor extends ImpactClass<ButtonInteractEntry> {
      new (): ButtonInteractEntry;
    }
    var ButtonInteractEntry: ButtonInteractEntryConstructor;
  }
}
