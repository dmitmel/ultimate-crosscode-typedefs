import './impact.feature.gui.base.basic-gui';
import './game.feature.gui.base.boxes';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    interface MultiPageBoxGui extends ig.GuiElementBase {
      header: sc.TextGui;

      _createInitContent(this: this, width: number): void;
    }
    interface MultiPageBoxGuiConstructor extends ImpactClass<MultiPageBoxGui> {}
    var MultiPageBoxGui: MultiPageBoxGuiConstructor;
  }
}
