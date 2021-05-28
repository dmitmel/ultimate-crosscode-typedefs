// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.trade.gui.equip-toggle-stats

export {};

declare global {
  namespace sc {
    interface ShopEquipStats extends sc.TradeToggleStats {}
    interface ShopEquipStatsConstructor extends ImpactClass<ShopEquipStats> {
      new (): ShopEquipStats;
    }
    var ShopEquipStats: ShopEquipStatsConstructor;
  }
}
