import './impact.base.image';
import './impact.base.game';
import './impact.feature.gui.gui';
import './impact.feature.storage.storage';

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
