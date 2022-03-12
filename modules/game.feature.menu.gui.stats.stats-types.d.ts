// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.save.save-misc
// requires game.feature.menu.gui.stats.stats-gui-builds
// requires game.feature.menu.gui.stats.stats-misc
// requires game.feature.menu.gui.synop.synop-misc

export {};

declare global {
  namespace sc {
    interface StatsBaseEntryGui extends ig.GuiElementBase {}
    interface StatsBaseEntryGuiConstructor extends ImpactClass<StatsBaseEntryGui> {}
    var StatsBaseEntryGui: StatsBaseEntryGuiConstructor;

    namespace STATS_ENTRY_TYPE {
      interface Time extends sc.StatsBaseEntryGui {}
      interface TimeConstructor extends ImpactClass<Time> {}
      var Time: TimeConstructor;

      interface Percent extends sc.StatsBaseEntryGui {}
      interface PercentConstructor extends ImpactClass<Percent> {}
      var Percent: PercentConstructor;

      interface KeyValue extends sc.StatsBaseEntryGui {}
      interface KeyValueConstructor extends ImpactClass<KeyValue> {}
      var KeyValue: KeyValueConstructor;

      interface KeyCurMax extends sc.StatsBaseEntryGui {}
      interface KeyCurMaxConstructor extends ImpactClass<KeyCurMax> {}
      var KeyCurMax: KeyCurMaxConstructor;

      interface KeyValuePercent extends sc.StatsBaseEntryGui {}
      interface KeyValuePercentConstructor extends ImpactClass<KeyValuePercent> {}
      var KeyValuePercent: KeyValuePercentConstructor;

      interface Separator extends sc.StatsBaseEntryGui {}
      interface SeparatorConstructor extends ImpactClass<Separator> {}
      var Separator: SeparatorConstructor;

      interface Logs extends sc.StatsBaseEntryGui {}
      interface LogsConstructor extends ImpactClass<Logs> {}
      var Logs: LogsConstructor;
    }
  }
}
