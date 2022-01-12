// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires game.feature.arena.entities.arena-spawn
// requires game.feature.arena.arena-loadable
// requires game.feature.combat.combat
// requires game.feature.arena.arena-bonus-objectives
// requires game.feature.arena.arena-score-types
// requires game.feature.arena.arena-challenges
// requires game.feature.arena.arena-cheer

export {};

declare global {
  namespace sc {
    enum ARENA_MEDALS_TROPHIES {
      BRONZE = 1,
      SILVER = 2,
      GOLD = 3,
      PLATIN = 4,
      TRUE_PLATIN = 5,
    }
  }
}
