import './impact.base.image';
import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.trade.gui.equip-toggle-stats';

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
