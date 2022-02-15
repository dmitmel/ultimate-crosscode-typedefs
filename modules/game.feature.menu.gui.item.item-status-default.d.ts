// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {}

declare global {
    namespace sc {
        enum MENU_BAR_TYPE {
            HP = 0,
            EXP = 1,
            SP = 2,
            BUFF = 3,
        }
        interface ItemStatusDefaultBar extends ig.GuiElementBase {
            maxNumber: sc.NumberGui;
            currentNumber: sc.NumberGui;
            type: sc.MENU_BAR_TYPE;

            init(this: this, text: sc.TextLike, type: sc.MENU_BAR_TYPE, buff: unknown, width: number, barHeight: number, position: number): void
        }
        interface ItemStatusDefaultBarConstructor extends ImpactClass<ItemStatusDefaultBar> {}
        var ItemStatusDefaultBar: ItemStatusDefaultBarConstructor;
    }
}