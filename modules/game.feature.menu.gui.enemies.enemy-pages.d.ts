import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.combat.gui.enemy-display-gui';
import './game.feature.menu.gui.menu-misc';
import './game.feature.gui.base.misc';

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
