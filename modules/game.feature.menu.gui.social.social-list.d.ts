// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.tab-box
// requires game.feature.menu.gui.social.social-misc

export {};

declare global {
  namespace sc {
    interface SocialList extends sc.ListTabbedPane {}
    interface SocialListConstructor extends ImpactClass<SocialList> {
      new (): SocialList;
    }
    var SocialList: SocialListConstructor;
  }
}
