// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.gui.base.boxes.d.ts
// requires impact.base.image.d.ts

declare namespace sc {
  interface LevelUpContentGui extends ig.GuiElementBase {}
  interface LevelUpContentGuiConstructor
    extends ImpactClass<LevelUpContentGui> {}
  var LevelUpContentGui: LevelUpContentGuiConstructor;
}
