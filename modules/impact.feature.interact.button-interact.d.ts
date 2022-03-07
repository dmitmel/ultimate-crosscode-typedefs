// requires impact.feature.interact.interact

export {};

declare global {
  namespace ig {
    interface ButtonGroup extends ig.Class {
      pressCallbacks: Array<(button?: ig.FocusGui, fromMouse?: boolean) => void>;
      selectionCallbacks: Array<(button?: ig.FocusGui) => void>;
      largestIndex: Vec2;

      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number, asBackButton?: boolean): void;
      addPressCallback(
        this: this,
        callback: (button?: ig.FocusGui, fromMouse?: boolean) => void,
      ): void;
      clear(this: this): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {}
    var ButtonGroup: ButtonGroupConstructor;

    interface ButtonInteractEntry extends ig.InteractEntry {
      pushButtonGroup(this: this, buttonGroup: ig.ButtonGroup): void;
      addGlobalButton(
        this: this,
        button: sc.ButtonGui,
        hotkeyCallback: () => boolean,
        d?: unknown,
      ): void;
      removeGlobalButton(this: this, button: sc.ButtonGui): void;
    }
    interface ButtonInteractEntryConstructor extends ImpactClass<ButtonInteractEntry> {
      new (): ButtonInteractEntry;
    }
    var ButtonInteractEntry: ButtonInteractEntryConstructor;
  }
}
