// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface ArenaScoreType {
      order: number;
      staticMultiplier?: number;
      static?: boolean;
      asBonus?: boolean;
      asMali?: boolean;
      dimReturns?: boolean;
      points?: number;
      chain?: number;
    }

    interface ARENA_SCORE_TYPES {
      DAMAGE_DONE: ArenaScoreType;
      DAMAGE_DONE_EFFECTIVE: ArenaScoreType;
      DAMAGE_TAKEN: ArenaScoreType;
      KILL: ArenaScoreType;
      BOSS_KILL: ArenaScoreType;
      TARGET_KILL: ArenaScoreType;
      MULTI_KILL: ArenaScoreType;
      ENVIRONMENT_KILL: ArenaScoreType;
      ONE_HIT_KILL: ArenaScoreType;
      LOCK_FINISH: ArenaScoreType;
      LOCK_FINISH_3: ArenaScoreType;
      ELEMENT_OVERLOAD: ArenaScoreType;
      PERFECT_SHIELD: ArenaScoreType;
      PERFECT_DODGE: ArenaScoreType;
      ENEMY_BREAK: ArenaScoreType;
      GUARD_COUNTER: ArenaScoreType;
      STATUS_INFLICT: ArenaScoreType;
      PVP_ROUND_WON: ArenaScoreType;
      PVP_ROUND_LOST: ArenaScoreType;
      ENEMY_HEAL: ArenaScoreType;
    }
    var ARENA_SCORE_TYPES: ARENA_SCORE_TYPES;
  }
}
