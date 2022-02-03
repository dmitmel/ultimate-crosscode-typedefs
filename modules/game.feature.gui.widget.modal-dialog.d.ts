// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    enum DIALOG_INFO_ICON {
      NONE,
      INFO,
      WARNING,
      ERROR,
      QUESTION,
    }

    interface ModalButtonInteract extends ig.GuiElementBase {
      transitions: Record<string, ig.GuiHook.Transition>;
      msgBox: sc.CenterBoxGui;
      textGui: sc.TextGui;
      content: ig.GuiElementBase;
      buttonInteract: ig.ButtonInteractEntry;
      buttongroup: sc.ButtonGroup;
      init(this: this, textValue: string, icon: sc.DIALOG_INFO_ICON, responseButtons: string[], callback: (button: sc.ButtonGui) => void): void;
      show(this: this): void;
      hide(this: this): void;
    }
    interface ModalButtonInteractConstructor extends ImpactClass<ModalButtonInteract> {}
    var ModalButtonInteract: ModalButtonInteractConstructor;

    interface Dialogs {
      showYesNoDialog(
        this: this,
        text?: sc.TextLike,
        icon?: sc.DIALOG_INFO_ICON,
        callback?: (button: sc.ButtonGui, dialog?: sc.ModalButtonInteract) => void,
        noSubmitSound?: boolean,
      ): void;
    }
    var Dialogs: Dialogs;
  }
}
