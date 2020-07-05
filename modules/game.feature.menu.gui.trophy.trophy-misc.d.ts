import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './impact.feature.interact.button-interact';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.stats.stats-misc';
import './game.feature.interact.button-group';

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
  }
}
