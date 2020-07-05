import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';

export {};

declare global {
  namespace sc {
    namespace MainMenu {
      interface SubMenuBox extends ig.BoxGui {
        text: sc.TextGui;
      }
      interface SubMenuBoxConstructor extends ImpactClass<SubMenuBox> {
        new (text: sc.TextLike): SubMenuBox;
      }

      interface CurrentMenuDisplay extends ig.GuiElementBase {
        boxes: sc.MainMenu.SubMenuBox[];

        pushMenuDisplay(this: this, name: sc.TextLike): void;
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
