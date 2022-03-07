// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    namespace EquipStatusContainer {
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
    interface EquipStatusContainer extends ig.GuiElementBase {
      baseParams: sc.EquipStatusContainer.BaseParams;
    }
    interface EquipStatusContainerConstructor extends ImpactClass<EquipStatusContainer> {
      new (): EquipStatusContainer;
    }
    var EquipStatusContainer: EquipStatusContainerConstructor;
  }
}
