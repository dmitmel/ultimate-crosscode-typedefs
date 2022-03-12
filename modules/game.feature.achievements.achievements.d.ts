// requires impact.base.game
// requires impact.base.loader
// requires impact.base.vars
// requires impact.feature.database.database
// requires impact.feature.greenworks.greenworks
// requires game.config
// requires game.feature.achievements.stats-model

export {};

declare global {
  namespace sc {
    interface TrophyIcon {
      index: number;
      cat: 'GENERAL' | 'COMBAT' | 'EXPLORATION';
      hidden?: boolean;
    }
    var TROPHY_ICONS: Record<string, sc.TrophyIcon>;
  }
}
