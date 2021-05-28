// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface LandmarkGui extends ig.FocusGui {
      map: sc.AreaLoadable.Map;
    }
    interface LandmarkGuiConstructor extends ImpactClass<LandmarkGui> {
      new (
        key: string,
        landmark: any, // TODO
        floor: number,
        map: any, // TODO
        area: string,
      ): LandmarkGui;
    }
    var LandmarkGui: LandmarkGuiConstructor;
  }
}
