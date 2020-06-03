// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.menu.gui.map.map-floor.d.ts
// requires game.feature.menu.gui.map.map-misc.d.ts

declare namespace sc {
  interface MapAreaContainer extends ig.GuiElementBase {
    onLandmarkPressed(this: this, landmark: sc.LandmarkGui): void;
  }
  interface MapAreaContainerConstructor extends ImpactClass<MapAreaContainer> {}
  var MapAreaContainer: MapAreaContainerConstructor;
}
