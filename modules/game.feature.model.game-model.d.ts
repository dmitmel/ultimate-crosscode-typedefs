// requires impact.base.game.d.ts
// requires impact.feature.bgm.bgm.d.ts
// requires game.feature.model.base-model.d.ts
// requires game.feature.player.player-model.d.ts
// requires game.feature.msg.message-model.d.ts
// requires game.feature.menu.menu-model.d.ts
// requires game.feature.model.options-model.d.ts
// requires impact.feature.env-particles.env-particles.d.ts

declare namespace sc {
  interface GameModel extends ig.GameAddon, sc.Model {
    message: sc.MessageModel;
  }
  interface GameModelConstructor extends ImpactClass<GameModel> {}
  var GameModel: GameModelConstructor;
  var model: sc.GameModel;
}
