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
      type StatItemType =
        | 'Percent'
        | 'Separator'
        | 'Time'
        | 'KeyValue'
        | 'KeyCurMax'
        | 'List'
        | 'Logs';

      interface StatItem {
        type?: StatItemType;
        subtype?: StatItemType;
        displayName?: string;
        highlight?: { min: number } | boolean;
        group?: string;
        stat?: string;
        map?: string;
        max?(): number;
        getSettings?(a: string): StatItem | null;
      }
    }
    var STATS_BUILD: Record<sc.STATS_CATEGORY, Record<string, Stats.StatItem>>;
  }
}
