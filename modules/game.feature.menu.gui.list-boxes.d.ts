// requires impact.feature.gui.gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface ButtonListBox extends sc.ScrollPane {
      buttonGroup: sc.ButtonGroup;
      contentPane: ig.GuiElementBase;

      activate(buttonInteract?: ig.ButtonInteractEntry | null): void;
      addButton(
        button: ig.GuiElementBase,
        skipButtonGroup: true,
        xOffset?: number | null,
        yOffset?: number | null,
      ): void;
      addButton(
        button: ig.FocusGui,
        skipButtonGroup?: false | null,
        xOffset?: number | null,
        yOffset?: number | null,
      ): void;
      clear(skipFirst?: boolean | null): void;
    }
    interface ButtonListBoxConstructor extends ImpactClass<ButtonListBox> {}
    var ButtonListBox: ButtonListBoxConstructor;
  }
}
