// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box

export {}

declare global {
    namespace sc {
        namespace ParamHudGui {
            interface Param extends ig.BoxGui {
                _number: sc.NumberGui;
            }
            interface ParamConstructor extends ImpactClass<Param> {
                new (statLangEntry: string, playerParam: string, width: number, maxNumber: number, iconIndex: number): sc.ParamHudGui.Param;
            }
        }
        interface ParamHudGui extends ig.GuiElementBase {
            hp: sc.ParamHudGui.Param;
            atk: sc.ParamHudGui.Param;
            def: sc.ParamHudGui.Param;
            foc: sc.ParamHudGui.Param;

            init(this: this): void;
        }
        interface ParamHudGuiConstructor extends ImpactClass<ParamHudGui> {
            Param: ParamHudGui.ParamConstructor
        }
        var ParamHudGui: ParamHudGuiConstructor
    }
}