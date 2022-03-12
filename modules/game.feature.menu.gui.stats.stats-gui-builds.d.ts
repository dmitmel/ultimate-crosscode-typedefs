export {};

declare global {
  namespace sc {
    enum STATS_CATEGORY {
      GENERAL = 0,
      COMBAT = 1,
      ITEMS = 2,
      QUESTS = 3,
      EXPLORATION = 4,
      MISC = 5,
      LOG = 6,
      ARENA = 7,
    }

    namespace Stats {
      interface StatItem {
        type?: keyof typeof sc.STATS_ENTRY_TYPE;
        subtype?: keyof typeof sc.STATS_ENTRY_TYPE;
        displayName?: string;
        highlight?: { min: number } | boolean;
        group?: string;
        stat?: string;
        map?: string;
        max?: () => number;
        getSettings?: (key: string) => StatItem | null;
      }
    }
    var STATS_BUILD: Record<sc.STATS_CATEGORY, Record<string, Stats.StatItem>>;
  }
}
