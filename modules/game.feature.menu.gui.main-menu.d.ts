// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes

export {};

declare global {
  namespace sc {
    namespace MainMenu {
      interface SubMenuBox extends ig.BoxGui {
        text: sc.TextGui;
      }
      interface SubMenuBoxConstructor extends ImpactClass<SubMenuBox> {
        new (text: string): SubMenuBox;
      }

      interface CurrentMenuDisplay extends ig.GuiElementBase {
        boxes: sc.MainMenu.SubMenuBox[];

        pushMenuDisplay(this: this, name: string): void;
      }
      interface CurrentMenuDisplayConstructor extends ImpactClass<CurrentMenuDisplay> {
        new (): CurrentMenuDisplay;
      }
    }
    interface MainMenu extends ig.GuiElementBase {}
    interface MainMenuConstructor extends ImpactClass<MainMenu> {
      SubMenuBox: MainMenu.SubMenuBoxConstructor;
      CurrentMenuDisplay: MainMenu.CurrentMenuDisplayConstructor;
    }
    var MainMenu: MainMenuConstructor;
  }
}
