// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.gui.base.numbers.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  interface LandmarkGui extends ig.FocusGui {
    map: sc.AreaLoadable.Map;
  }
  interface LandmarkGuiConstructor extends ImpactClass<LandmarkGui> {}
  var LandmarkGui: LandmarkGuiConstructor;
}
