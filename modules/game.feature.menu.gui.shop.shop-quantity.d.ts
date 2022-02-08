// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires impact.feature.interact.gui.focus-gui

export {}

declare global {
    namespace sc {
        interface ShopQuantitySelect extends ig.BoxGui {
            _max: number;
            active: boolean;
            _button: sc.ShopItemButton;
            show(this: this, a: sc.ShopItemButton, b: number, c: number): void;
        }
        interface ShopQuantitySelectConstructor extends ImpactClass<ShopQuantitySelect> {}
        var ShopQuantitySelect: ShopQuantitySelectConstructor
    }
}