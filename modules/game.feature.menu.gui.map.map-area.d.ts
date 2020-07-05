import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.map.map-floor';
import './game.feature.menu.gui.map.map-misc';

export {};

declare global {
  namespace sc {
    interface MapAreaContainer extends ig.GuiElementBase {
      onLandmarkPressed(this: this, landmark: sc.LandmarkGui): void;
    }
    interface MapAreaContainerConstructor extends ImpactClass<MapAreaContainer> {}
    var MapAreaContainer: MapAreaContainerConstructor;
  }
}
