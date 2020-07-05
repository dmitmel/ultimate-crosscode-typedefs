import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    interface BotanicsEntryButton extends sc.ListBoxButton {}
    interface BotanicsEntryButtonConstructor extends ImpactClass<BotanicsEntryButton> {}
    var BotanicsEntryButton: BotanicsEntryButtonConstructor;
  }
}
