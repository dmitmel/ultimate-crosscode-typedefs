// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface BotanicsEntryButton extends sc.ListBoxButton {}
    interface BotanicsEntryButtonConstructor extends ImpactClass<BotanicsEntryButton> {}
    var BotanicsEntryButton: BotanicsEntryButtonConstructor;
  }
}
