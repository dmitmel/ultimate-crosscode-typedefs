// requires impact.base.image
// requires impact.base.game
// requires impact.feature.gui.gui
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    interface Gui extends ig.GameAddon {
      guiHooks: ig.GuiHook[];
    }
    interface GuiConstructor extends ImpactClass<Gui> {}
    var Gui: GuiConstructor;
    var gui: Gui;
  }
}
