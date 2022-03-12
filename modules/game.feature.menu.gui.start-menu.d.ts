// requires impact.feature.gui.gui
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.main-menu
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    namespace StartMenu {
      interface Buttons {
        quest: sc.ButtonGui;
        skills: sc.ButtonGui;
        equipment: sc.ButtonGui;
        items: sc.ButtonGui;
        status: sc.ButtonGui;
        social: sc.ButtonGui;
        synopsis: sc.NewUnlockButton;
        save: sc.ButtonGui;
      }
    }
    interface StartMenu extends sc.BaseMenu {
      buttons: sc.StartMenu.Buttons;

      showMenu(this: this): void;
    }
    interface StartMenuConstructor extends ImpactClass<StartMenu> {
      new (): StartMenu;
    }
    var StartMenu: StartMenuConstructor;
  }
}
