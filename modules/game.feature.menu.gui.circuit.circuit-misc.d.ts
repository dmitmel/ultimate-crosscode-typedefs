// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc
// requires game.feature.skills.skilltree
// requires game.feature.player.player-model

export {};

declare global {
  namespace sc {
    namespace CrossPointsOverview {
      interface Entry extends ig.GuiElementBase {
        gfx: ig.Image;
      }
      interface EntryConstructor extends ImpactClass<Entry> {
        new (element: sc.ELEMENT): Entry;
      }
    }
    interface CrossPointsOverview extends ig.GuiElementBase {}
    interface CrossPointsOverviewConstructor extends ImpactClass<CrossPointsOverview> {
      new (): CrossPointsOverview;
      Entry: CrossPointsOverview.EntryConstructor;
    }
    var CrossPointsOverview: CrossPointsOverviewConstructor;
  }
}
