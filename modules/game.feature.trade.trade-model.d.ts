import './impact.base.game';
import './impact.base.loader';
import './impact.feature.interact.button-interact';
import './impact.feature.database.database';
import './impact.feature.storage.storage';
import './game.feature.model.base-model';

export {};

declare global {
  namespace sc {
    namespace TradeModel {
      interface FoundTrader {
        characterName: string;
        map: ig.LangLabel;
        area: ig.LangLabel;
        time: number;
      }
    }

    interface TradeModel extends ig.GameAddon, sc.Model {
      getFoundTrader(this: this, key: string): sc.TradeModel.FoundTrader;
    }
    interface TradeModelConstructor extends ImpactClass<TradeModel> {}
    var TradeModel: TradeModelConstructor;
    var trade: sc.TradeModel;
  }
}
