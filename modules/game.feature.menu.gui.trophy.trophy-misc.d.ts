// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.interact.button-interact.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.list-boxes.d.ts
// requires game.feature.menu.gui.stats.stats-misc.d.ts
// requires game.feature.interact.button-group.d.ts

declare namespace sc {
  interface TrophyListEntry extends ig.FocusGui {
    description: sc.TextGui;
  }
  interface TrophyListEntryConstructor extends ImpactClass<TrophyListEntry> {
    new (
      key: string,
      groupID: string,
      sectionID: string,
      showProgress: boolean,
    ): TrophyListEntry;
  }
  var TrophyListEntry: TrophyListEntryConstructor;
}
