// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.combat.gui.enemy-display-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.gui.base.misc

export {};

declare global {
  namespace sc {
    interface EnemyBaseParamLine extends ig.GuiElementBase {
      gfx: ig.Image;
      icon: number;
    }
    interface EnemyBaseParamLineConstructor extends ImpactClass<EnemyBaseParamLine> {}
    var EnemyBaseParamLine: EnemyBaseParamLineConstructor;
  }
}
