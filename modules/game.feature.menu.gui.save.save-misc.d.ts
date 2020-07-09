import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.version.version';
import './game.feature.gui.widget.modal-dialog';
import './game.feature.menu.gui.menu-misc';
import './impact.feature.interact.gui.focus-gui';

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
  }
}
