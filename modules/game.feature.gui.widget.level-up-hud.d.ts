// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.boxes
// requires impact.base.image

export {};

declare global {
  namespace sc {
    interface LevelUpContentGui extends ig.GuiElementBase {}
    interface LevelUpContentGuiConstructor extends ImpactClass<LevelUpContentGui> {}
    var LevelUpContentGui: LevelUpContentGuiConstructor;
  }
}
