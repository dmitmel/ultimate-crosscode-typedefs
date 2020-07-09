import './impact.base.game';
import './impact.feature.bgm.bgm';
import './game.feature.model.base-model';
import './game.feature.player.player-model';
import './game.feature.msg.message-model';
import './game.feature.menu.menu-model';
import './game.feature.model.options-model';
import './impact.feature.env-particles.env-particles';

export {};

declare global {
  namespace sc {
    interface GameModel extends ig.GameAddon, sc.Model {
      message: sc.MessageModel;

      enterPrevSubState(this: this): void;
    }
    interface GameModelConstructor extends ImpactClass<GameModel> {}
    var GameModel: GameModelConstructor;
    var model: sc.GameModel;
  }
}
