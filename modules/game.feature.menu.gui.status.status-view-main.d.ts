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
        hp: true;
        atk: true;
        def: true;
        foc: true;
        fire: true;
        cold: true;
        shock: true;
        wave: true;
      }
    }
    interface StatusViewMainParameters extends sc.MenuPanel {
      baseParams: Record<keyof StatusViewMainParameters.BaseParams, sc.SimpleStatusDisplay>;
      init(this: this): void;
    }
    interface StatusViewMainParametersConstructor extends ImpactClass<StatusViewMainParameters> {}
    var StatusViewMainParameters: StatusViewMainParametersConstructor;
  }
}
