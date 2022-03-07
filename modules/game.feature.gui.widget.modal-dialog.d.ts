// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    enum DIALOG_INFO_ICON {
      NONE = 0,
      INFO = 1,
      WARNING = 2,
      ERROR = 3,
      QUESTION = 4,
    }

    interface ModalButtonInteract extends ig.GuiElementBase {
      msgBox: sc.CenterBoxGui;
      textGui: sc.TextGui;
      content: ig.GuiElementBase;
      buttons: sc.ButtonGui[];
      buttonInteract: ig.ButtonInteractEntry;
      buttongroup: sc.ButtonGroup;

      show(this: this): void;
      hide(this: this): void;
    }
    interface ModalButtonInteractConstructor extends ImpactClass<ModalButtonInteract> {
      new (
        text: sc.TextLike,
        icon: sc.DIALOG_INFO_ICON | null | undefined,
        options: sc.TextLike[],
        callback: (button: sc.ButtonGui) => void,
        disableSubmitSound?: boolean | null,
      ): ModalButtonInteract;
    }
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
