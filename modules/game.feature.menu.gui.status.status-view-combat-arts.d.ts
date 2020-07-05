// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.stats.stats-misc.d.ts

declare namespace sc {
  interface StatusViewCombatArtsEntry extends ig.GuiElementBase {
    getConditionType(this: this): string;
  }
  interface StatusViewCombatArtsEntryConstructor extends ImpactClass<StatusViewCombatArtsEntry> {}
  var StatusViewCombatArtsEntry: StatusViewCombatArtsEntryConstructor;
}
