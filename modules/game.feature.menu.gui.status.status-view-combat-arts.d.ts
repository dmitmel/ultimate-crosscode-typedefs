// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.stats.stats-misc

export {};

declare global {
  namespace sc {
    interface StatusViewCombatArtsEntry extends ig.GuiElementBase {
      skillIcons: ig.Image;
      icon: ig.ImageGui;
      level: sc.NumberGui;
      sp: sc.NumberGui;
      dmgType: sc.TextGui;
      stunType: sc.TextGui;
      condition: sc.TextGui;
      name: sc.TextGui;
      description: sc.TextGui;

      init(this: this, artLevel: number, action: sc.PlayerAction): void;
      getConditionType(this: this): string;
    }
    interface StatusViewCombatArtsEntryConstructor extends ImpactClass<StatusViewCombatArtsEntry> {}
    var StatusViewCombatArtsEntry: StatusViewCombatArtsEntryConstructor;
  }
}
