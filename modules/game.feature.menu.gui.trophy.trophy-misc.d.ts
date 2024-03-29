// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.stats.stats-misc
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    interface TrophyListEntry extends ig.FocusGui {
      description: sc.TextGui;
    }
    interface TrophyListEntryConstructor extends ImpactClass<TrophyListEntry> {
      new (key: string, groupID: string, sectionID: string, showProgress: boolean): TrophyListEntry;
    }
    var TrophyListEntry: TrophyListEntryConstructor;

    interface TrophyIconGraphic extends ig.GuiElementBase {
      ribbon: ig.ImageGui;
      icon: ig.ImageGui;
      points: sc.NumberGui;
    }
    interface TrophyIconGraphicConstructor extends ImpactClass<TrophyIconGraphic> {
      new (
        icon: keyof typeof sc.TROPHY_ICONS,
        stars: number,
        points: number,
        trophyUnlocked: boolean,
      ): TrophyIconGraphic;
    }
    var TrophyIconGraphic: TrophyIconGraphicConstructor;
  }
}
