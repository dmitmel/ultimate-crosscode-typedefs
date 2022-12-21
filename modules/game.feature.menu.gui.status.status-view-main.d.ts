// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    namespace StatusViewMainEquipment {
      interface Entry extends ig.GuiElementBase {
        textGui: sc.TextGui;
        itemGui: sc.TextGui & sc.TextGui.LevelDrawData;
      }
      interface EntryConstructor extends ImpactClass<Entry> {
        new (bodyPart: string): Entry;
      }
      var Entry: EntryConstructor;
    }

    namespace StatusViewMainParameters {
      interface BaseParams {
        hp: sc.SimpleStatusDisplay;
        atk: sc.SimpleStatusDisplay;
        def: sc.SimpleStatusDisplay;
        foc: sc.SimpleStatusDisplay;
        fire: sc.SimpleStatusDisplay;
        cold: sc.SimpleStatusDisplay;
        shock: sc.SimpleStatusDisplay;
        wave: sc.SimpleStatusDisplay;
      }
    }
    interface StatusViewMainParameters extends sc.MenuPanel {
      menuGfx: ig.Image;
      level: sc.NumberGui;
      baseParams: sc.StatusViewMainParameters.BaseParams;
    }
    interface StatusViewMainParametersConstructor extends ImpactClass<StatusViewMainParameters> {
      new (): StatusViewMainParameters;
    }
    var StatusViewMainParameters: StatusViewMainParametersConstructor;
  }
}
