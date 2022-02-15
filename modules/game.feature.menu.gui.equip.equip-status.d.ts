// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.menu-misc

export {}

declare global {
    namespace sc {
        namespace EquipStatusContainer {
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
        interface EquipStatusContainer extends ig.GuiElementBase {
            baseParams: Record<keyof EquipStatusContainer.BaseParams, sc.SimpleStatusDisplay>;
            init(this: this): void;
        }
        interface EquipStatusContainerConstructor extends ImpactClass<EquipStatusContainer> {}
        var EquipStatusContainer: EquipStatusContainerConstructor;
    }
}