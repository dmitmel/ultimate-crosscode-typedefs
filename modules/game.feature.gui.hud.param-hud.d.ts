// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface ParamHudGui extends ig.GuiElementBase {
      level: sc.ParamHudGui.Level;
      hp: sc.ParamHudGui.Param;
      atk: sc.ParamHudGui.Param;
      def: sc.ParamHudGui.Param;
      foc: sc.ParamHudGui.Param;

      init(this: this): void;
      showParams(this: this, isInMenu?: boolean): void;
      hideParams(this: this, skipTransition?: boolean): void;
    }
    interface ParamHudGuiConstructor extends ImpactClass<ParamHudGui> {
      new (): ParamHudGui;
      Pie: sc.ParamHudGui.PieConstructor;
      Param: sc.ParamHudGui.ParamConstructor;
      Level: sc.ParamHudGui.LevelConstructor;
    }
    var ParamHudGui: ParamHudGuiConstructor;

    namespace ParamHudGui {
      interface Pie extends ig.GuiElementBase, sc.Model.Observer {
        gfx: ig.Image;
        param: sc.CombatParams.ParamName;
        offsetX: number;
        offsetY: number;
        _timer: number;
        _targetValue: number;
        _startValue: number;

        _getCurrentValue(this: this): number;
        _calcOffset(this: this, value: number): number;
      }
      interface PieConstructor extends ImpactClass<Pie> {
        new (param: sc.CombatParams.ParamName): Pie;
      }

      interface Param extends ig.BoxGui, sc.Model.Observer {
        ninepatch: ig.NinePatch;
        _pie: ig.ImageGui;
        _text: sc.TextGui;
        _number: sc.NumberGui;
        _param: sc.CombatParams.ParamName;

        _setNumber(this: this, skipTransition?: boolean): void;
      }
      interface ParamConstructor extends ImpactClass<Param> {
        new (
          langId: string,
          paramName: sc.CombatParams.ParamName,
          width: number,
          maxValue: number,
          icon: number,
        ): Param;
      }

      interface Level extends ig.BoxGui, sc.Model.Observer {
        ninepatch: ig.NinePatch;
        _text: sc.TextGui;
        _level: sc.NumberGui;
      }
      interface LevelConstructor extends ImpactClass<Level> {
        new (): Level;
      }
    }
  }
}
