// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.combat.gui.enemy-display-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.gui.base.misc

export {};

declare global {
  namespace sc {
    interface EnemyPageGeneralInfo extends ig.GuiElementBase {
      drops: sc.EnemyDrops;

      setData(
        this: this,
        enemyName: string,
        enemyType: sc.EnemyType,
        skipTransition?: boolean,
        boosted?: boolean,
      ): void;
    }
    interface EnemyPageGeneralInfoConstructor extends ImpactClass<EnemyPageGeneralInfo> {
      new (): EnemyPageGeneralInfo;
    }
    var EnemyPageGeneralInfo: EnemyPageGeneralInfoConstructor;

    interface EnemyBaseParamLine extends ig.GuiElementBase {
      gfx: ig.Image;
      icon: number;
    }
    interface EnemyBaseParamLineConstructor extends ImpactClass<EnemyBaseParamLine> {}
    var EnemyBaseParamLine: EnemyBaseParamLineConstructor;

    interface EnemyDrops extends ig.GuiElementBase {
      setDrops(
        this: this,
        drops: EnemyType.ItemDrop[],
        skipTransition?: boolean,
        boosted?: boolean,
      ): void;
    }
    interface EnemyDropsConstructor extends ImpactClass<EnemyDrops> {
      new (): EnemyDrops;
    }
    var EnemyDrops: EnemyDropsConstructor;
  }
}
