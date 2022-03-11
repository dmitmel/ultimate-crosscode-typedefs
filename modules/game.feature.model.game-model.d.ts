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
    type CombatRankLabel = 'D' | 'C' | 'B' | 'A' | 'S';

    interface GameModel extends ig.GameAddon, sc.Model {
      message: sc.MessageModel;
      currentSubState: sc.GAME_MODEL_SUBSTATE;
      prevSubState: sc.GAME_MODEL_SUBSTATE;
      player: sc.PlayerModel;

      addChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      removeChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      isAssistMode(this: this): boolean;
      getCombatRankDropRate(this: this): number;
      enterPrevSubState(this: this): void;
      enterMenu(this: this, force?: boolean | null): void;
    }
    interface GameModelConstructor extends ImpactClass<GameModel> {}
    var GameModel: GameModelConstructor;
    var model: sc.GameModel;
  }
}
