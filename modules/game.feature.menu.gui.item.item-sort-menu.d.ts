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

            //enumIndex is normally referring to an sc.SORT_TYPE, but it does not have to be (i.e. sc.QUEST_SORT_TYPE)
            addButton(key: string, enumIndex: number, buttonIndex: number): void;
            hideSortMenu(this: this): void;
            showSortMenu(this: this, referenceGUI: ig.GuiElementBase): void;
            showSortMenuAt(this: this, x: number, y: number): void;
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