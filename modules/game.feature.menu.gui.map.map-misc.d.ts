import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.gui.base.numbers';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    interface LandmarkGui extends ig.FocusGui {
      map: sc.AreaLoadable.Map;
    }
    interface LandmarkGuiConstructor extends ImpactClass<LandmarkGui> {}
    var LandmarkGui: LandmarkGuiConstructor;
  }
}
