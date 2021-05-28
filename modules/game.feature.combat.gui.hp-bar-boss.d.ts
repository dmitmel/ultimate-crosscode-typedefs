// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface BigGenericBar extends ig.GuiElementBase {}
    interface BigGenericBarConstructor extends ImpactClass<BigGenericBar> {}
    var BigGenericBar: BigGenericBarConstructor;

    interface BigHpBar extends sc.BigGenericBar {}
    interface BigHpBarConstructor extends ImpactClass<BigHpBar> {}
    var BigHpBar: BigHpBarConstructor;
  }

  namespace sc.SUB_HP_EDITOR {
    interface BOSS extends sc.BigHpBar {
      labelGui: sc.TextGui;
    }
    interface BOSS_CONSTRUCTOR extends ImpactClass<BOSS> {
      new (a: ig.ENTITY.Enemy): BOSS;
    }
    var BOSS: BOSS_CONSTRUCTOR;

    interface PVP extends sc.BigHpBar {}
    interface PVP_CONSTRUCTOR extends ImpactClass<PVP> {
      new (a: ig.ENTITY.Enemy): PVP;
    }
    var PVP: PVP_CONSTRUCTOR;
  }
}
