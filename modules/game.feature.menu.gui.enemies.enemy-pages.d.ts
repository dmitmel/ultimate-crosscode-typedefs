// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.combat.gui.enemy-display-gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.gui.base.misc.d.ts

declare namespace sc {
  interface EnemyBaseParamLine extends ig.GuiElementBase {
    gfx: ig.Image;
    icon: number;
  }
  interface EnemyBaseParamLineConstructor
    extends ImpactClass<EnemyBaseParamLine> {}
  var EnemyBaseParamLine: EnemyBaseParamLineConstructor;
}
