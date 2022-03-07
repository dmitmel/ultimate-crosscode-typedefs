// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.version.version
// requires game.feature.gui.widget.modal-dialog
// requires game.feature.menu.gui.menu-misc
// requires impact.feature.interact.gui.focus-gui

export {};

declare global {
  namespace sc {
    interface SaveSlotButton extends ig.FocusGui {
      autoSlotMiss: sc.TextGui;
      content: ig.GuiElementBase;
    }
    interface SaveSlotButtonConstructor extends ImpactClass<SaveSlotButton> {
      new (save?: ig.SaveSlot.Data, slot?: number): SaveSlotButton;
    }
    var SaveSlotButton: SaveSlotButtonConstructor;

    interface SaveSlotChapter extends ig.GuiElementBase {
      textGui: sc.TextGui;
      chapterGui: sc.NumberGui;
      metaMarker: ig.ImageGui

      init(this: this): void
    }
    interface SaveSlotLocationConstructor extends ImpactClass<SaveSlotChapter> {
      new (): SaveSlotChapter;
    }
    var SaveSlotChapter: SaveSlotLocationConstructor;
  }
}
