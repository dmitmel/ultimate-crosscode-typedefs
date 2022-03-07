// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.arena.arena-cup-page
// requires game.feature.menu.gui.arena.arena-round-page
// requires game.feature.menu.gui.stats.stats-types

export {};

declare global {
  namespace sc {
    interface ArenaInfoBox extends ig.BoxGui {
      title: sc.TextGui;
      category: sc.TextGui;
      level: sc.NumberGui;
    }
    interface ArenaInfoBoxConstructor extends ImpactClass<ArenaInfoBox> {
      new (): sc.ArenaInfoBox;
    }
    var ArenaInfoBox: ArenaInfoBoxConstructor;

    interface ArenaEntryButton extends sc.ListBoxButton {
      trophyGfx: ig.Image;
      key: string | null | undefined;
      description: string | null | undefined;
      decoration: ig.ImageGui;

      setDecoration(this: this, medal: sc.ARENA_MEDALS_TROPHIES | null | undefined): void;
    }
    interface ArenaEntryButtonConstructor extends ImpactClass<ArenaEntryButton> {
      new (
        text: sc.TextLike,
        key: string | null | undefined,
        description: string | null | undefined,
        medal: sc.ARENA_MEDALS_TROPHIES | null | undefined,
      ): ArenaEntryButton;
    }
    var ArenaEntryButton: ArenaEntryButtonConstructor;

    interface ArenaRoundEntryButton extends sc.ArenaEntryButton {
      round: sc.NumberGui;
      dots: ig.ImageGui;
      index: number;
    }
    interface ArenaRoundEntryButtonConstructor extends ImpactClass<ArenaRoundEntryButton> {
      new (
        text: sc.TextLike,
        key: string | null | undefined,
        index: number,
        description: string | null | undefined,
        totalRounds: number | null | undefined,
        medal: sc.ARENA_MEDALS_TROPHIES | null | undefined,
      ): ArenaRoundEntryButton;
    }
    var ArenaRoundEntryButton: ArenaRoundEntryButtonConstructor;
  }
}
