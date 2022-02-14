// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.map-interact

export {};

declare global {
  namespace sc {
    interface TradeIconGui extends ig.BoxGui {
      numberGfx: ig.Image;
      tradeInfo: any; // TODO
      tradeIcon: unknown;
      lineGui: ig.ColorGui;
      entries: Array<{
        require: any; // TODO
        gui: sc.TextGui & { tradeName: string } & sc.TextGui.LevelDrawData;
      }>;

      setIconState(this: this, state: sc.INTERACT_ENTRY_STATE): void;
      isActive(this: this, state: sc.INTERACT_ENTRY_STATE): boolean;
      _createContent(this: this): void;
      _createStatic(this: this): void;
      _updateTexts(this: this): void;
      _hasMissingItem(this: this, require: any): boolean | undefined;
      remove(this: this): void;
    }
    interface TradeIconGuiConstructor extends ImpactClass<TradeIconGui> {
      new (trader: string): TradeIconGui;
    }
    var TradeIconGui: TradeIconGuiConstructor;
  }
}
