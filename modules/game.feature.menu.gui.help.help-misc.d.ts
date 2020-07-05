import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';

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
