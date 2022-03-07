// requires impact.base.game
// requires game.feature.model.game-model
// requires game.feature.interact.gui.interact-gui

export {};

declare global {
  namespace sc {
    enum INTERACT_ENTRY_STATE {
      HIDDEN = 0,
      AWAY = 1,
      NEAR = 2,
      BLOCKED = 3,
      FOCUS = 4,
      RUNNING = 5,
    }
  }
}
