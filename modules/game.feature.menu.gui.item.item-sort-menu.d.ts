// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box

export {}

declare global {
    namespace sc {
        interface SortMenu extends ig.BoxGui {
            ninepatch: ig.NinePatch;
            transitions: Record<string, ig.GuiHook.Transition>;
            active: boolean;
            buttongroup: sc.ButtonGroup;

            addButton(key: string, enumIndex: sc.SORT_TYPE, buttonIndex: number): void
        }
        interface SortMenuConstructor extends ImpactClass<SortMenu> {
            new (
                callback: (button: ig.FocusGui) => void,
                backCallback?: () => void,
                widthOverride?: number
            ): sc.SortMenu;
        }
        var SortMenu: SortMenuConstructor
    }
}