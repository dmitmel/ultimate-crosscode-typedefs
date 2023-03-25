// requires impact.base.image
// requires impact.base.game
// requires impact.feature.gui.gui
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    interface Gui extends ig.GameAddon {
      guiHooks: ig.GuiHook[];
      controlModule: sc.Control;

      addGuiElement(this: this, guiElement: ig.GuiElementBase): void;
    }
    interface GuiConstructor extends ImpactClass<Gui> {
      new (): Gui;
    }
    var Gui: GuiConstructor;
    var gui: Gui;
  }
}
