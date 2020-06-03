// requires impact.base.image.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.trade.gui.equip-toggle-stats.d.ts

declare namespace sc {
  interface ShopEquipStats extends sc.TradeToggleStats {}
  interface ShopEquipStatsConstructor extends ImpactClass<ShopEquipStats> {
    new (): ShopEquipStats;
  }
  var ShopEquipStats: ShopEquipStatsConstructor;
}
