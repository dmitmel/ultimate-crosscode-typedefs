// requires impact.feature.gui.base.box.d.ts
// requires impact.feature.gui.gui.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.quests.quest-entries.d.ts

declare namespace sc {
  interface LogGuiTypeBase extends ig.GuiElementBase {
    textGui: sc.TextGui;
  }
  interface LogGuiTypeBaseConstructor extends ImpactClass<LogGuiTypeBase> {
    new (settings: any): LogGuiTypeBase;
  }
  var LogGuiTypeBase: LogGuiTypeBaseConstructor;
}
