// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.trophy.trophy-misc

export {};

declare global {
  namespace sc {
    interface TrophyList extends sc.ListTabbedPane {}
    interface TrophyListConstructor extends ImpactClass<TrophyList> {}
    var TrophyList: TrophyListConstructor;
  }
}
