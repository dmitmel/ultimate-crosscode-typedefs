// requires impact.base.game.d.ts
// requires impact.base.loader.d.ts
// requires impact.feature.interact.button-interact.d.ts
// requires impact.feature.database.database.d.ts
// requires impact.feature.storage.storage.d.ts
// requires game.feature.model.base-model.d.ts

declare namespace sc {
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
