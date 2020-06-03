// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.version.version.d.ts
// requires game.feature.gui.widget.modal-dialog.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires impact.feature.interact.gui.focus-gui.d.ts

declare namespace sc {
  interface SaveSlotButton extends ig.FocusGui {
    content: ig.GuiElementBase;
  }
  interface SaveSlotButtonConstructor extends ImpactClass<SaveSlotButton> {
    new (save: ig.SaveSlot.Data, slot: number): SaveSlotButton;
  }
  var SaveSlotButton: SaveSlotButtonConstructor;
}
