// requires impact.base.game
// requires impact.feature.bgm.bgm
// requires game.feature.model.base-model
// requires game.feature.player.player-model
// requires game.feature.msg.message-model
// requires game.feature.menu.menu-model
// requires game.feature.model.options-model
// requires impact.feature.env-particles.env-particles

export {};

declare global {
  namespace sc {
    interface GameModel extends ig.GameAddon, sc.Model {
      message: sc.MessageModel;
      prevSubState: sc.GAME_MODEL_SUBSTATE;
      player: PlayerModel;

      enterPrevSubState(this: this): void;
      addChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      removeChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      isAssistMode(this: this): boolean;
      enterMenu(this: this, b: boolean): void;
      getCombatRankDropRate(this: this): number;
    }
    interface GameModelConstructor extends ImpactClass<GameModel> {}
    var GameModel: GameModelConstructor;
    var model: sc.GameModel;
  }
}
