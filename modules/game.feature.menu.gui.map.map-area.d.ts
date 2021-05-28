// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.map.map-floor
// requires game.feature.menu.gui.map.map-misc

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
