import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    interface StatusParamBar extends ig.GuiElementBase {
      gfx: ig.Image;
      lineID: number;
      usePercent: boolean;
      iconIndex: Vec2;
      skipVertLine: boolean;
      _baseRed: boolean;
      _equipRed: boolean;
      _skillsRed: boolean;
      _hideAll: boolean;
      _skillHidden: boolean;
    }
    interface StatusParamBarConstructor extends ImpactClass<StatusParamBar> {}
    var StatusParamBar: StatusParamBarConstructor;
  }
}
