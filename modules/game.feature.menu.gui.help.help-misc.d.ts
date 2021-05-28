// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface HelpLevelEntry extends ig.GuiElementBase {
      color: sc.TextGui;
      desc: sc.TextGui;
    }
    interface HelpLevelEntryConstructor extends ImpactClass<HelpLevelEntry> {
      new (colorID: string, fontColor: sc.FONT_COLORS): HelpLevelEntry;
    }
    var HelpLevelEntry: HelpLevelEntryConstructor;
  }
}
