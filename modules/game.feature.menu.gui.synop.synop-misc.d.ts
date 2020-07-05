import './impact.feature.gui.base.box';
import './impact.feature.gui.gui';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.quests.quest-entries';

export {};

declare global {
  namespace sc {
    interface LogGuiTypeBase extends ig.GuiElementBase {
      textGui: sc.TextGui;
    }
    interface LogGuiTypeBaseConstructor extends ImpactClass<LogGuiTypeBase> {
      // TODO
      new (settings: any): LogGuiTypeBase;
    }
    var LogGuiTypeBase: LogGuiTypeBaseConstructor;
  }
}
