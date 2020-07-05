import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.stats.stats-misc';

export {};

declare global {
  namespace sc {
    interface StatusViewCombatArtsEntry extends ig.GuiElementBase {
      getConditionType(this: this): string;
    }
    interface StatusViewCombatArtsEntryConstructor extends ImpactClass<StatusViewCombatArtsEntry> {}
    var StatusViewCombatArtsEntry: StatusViewCombatArtsEntryConstructor;
  }
}
