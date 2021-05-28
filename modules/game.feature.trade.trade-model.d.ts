// requires impact.base.game
// requires impact.base.loader
// requires impact.feature.interact.button-interact
// requires impact.feature.database.database
// requires impact.feature.storage.storage
// requires game.feature.model.base-model

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
