import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.gui.base.boxes';
import './impact.base.image';

export {};

declare global {
  namespace sc {
    interface LevelUpContentGui extends ig.GuiElementBase {}
    interface LevelUpContentGuiConstructor extends ImpactClass<LevelUpContentGui> {}
    var LevelUpContentGui: LevelUpContentGuiConstructor;
  }
}
