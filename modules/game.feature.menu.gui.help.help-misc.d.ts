// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  interface HelpLevelEntry extends ig.GuiElementBase {
    color: sc.TextGui;
    desc: sc.TextGui;
  }
  interface HelpLevelEntryConstructor extends ImpactClass<HelpLevelEntry> {
    new (colorID: string, fontColor: sc.FONT_COLORS): HelpLevelEntry;
  }
  var HelpLevelEntry: HelpLevelEntryConstructor;
}
