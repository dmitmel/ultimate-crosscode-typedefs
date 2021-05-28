// requires impact.feature.gui.gui
// requires impact.base.image
// requires game.feature.gui.base.button
// requires game.feature.menu.gui.save.save-menu
// requires game.feature.gui.widget.modal-dialog

export {};

declare global {
  namespace sc {
    interface PauseScreenGui extends ig.GuiElementBase {
      buttonGroup: sc.ButtonGroup;
      resumeButton: sc.ButtonGui;
      skipButton: sc.ButtonGui;
      cancelButton: sc.ButtonGui;
      toTitleButton: sc.ButtonGui;
      saveGameButton: sc.ButtonGui;
      optionsButton: sc.ButtonGui;
      arenaRestart: sc.ButtonGui;
      arenaLobby: sc.ButtonGui;
      versionGui: sc.TextGui;

      updateButtons(this: this, refocus: boolean): void;
    }
    interface PauseScreenGuiConstructor extends ImpactClass<PauseScreenGui> {
      new (): PauseScreenGui;
    }
    var PauseScreenGui: PauseScreenGuiConstructor;
  }
}
