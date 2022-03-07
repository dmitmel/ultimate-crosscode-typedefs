// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface StatusParamBar extends ig.GuiElementBase {
      gfx: ig.Image;
      lineID: number;
      usePercent: boolean;
      iconIndex: Vec2;
      skipVertLine: boolean;
      base: sc.NumberGui;
      equip: sc.NumberGui;
      skills: sc.NumberGui;
      equipAdd: sc.NumberGui;
      skillAdd: sc.NumberGui;
      _baseRed: boolean;
      _equipRed: boolean;
      _skillsRed: boolean;
      _hideAll: boolean;
      _skillHidden: boolean;
    }
    interface StatusParamBarConstructor extends ImpactClass<StatusParamBar> {
      new (
        name: string,
        description: string,
        size: number,
        lineID: number,
        iconID: number,
        usePercent: boolean,
        skillHidden: boolean,
        noPercent: boolean,
        longNumber: boolean,
      ): StatusParamBar;
    }
    var StatusParamBar: StatusParamBarConstructor;
  }
}
