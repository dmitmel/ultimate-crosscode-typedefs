// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.stats.stats-misc

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
