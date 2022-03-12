// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.map.map-misc

export {};

declare global {
  namespace sc {
    interface AreaButton extends ig.FocusGui {
      key: string;
      area: sc.MapModel.Area;
    }
    interface AreaButtonConstructor extends ImpactClass<AreaButton> {}
    var AreaButton: AreaButtonConstructor;

    interface MapWorldMap extends ig.GuiElementBase {
      areaName: sc.WorldmapAreaName;

      _setAreaName(this: this, button: sc.AreaButton): void;
    }
    interface MapWorldMapConstructor extends ImpactClass<MapWorldMap> {
      new (): MapWorldMap;
    }
    var MapWorldMap: MapWorldMapConstructor;
  }
}
