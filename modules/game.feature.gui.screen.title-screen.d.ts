// requires impact.feature.gui.gui
// requires game.feature.gui.base.button
// requires impact.feature.parallax.parallax
// requires game.feature.gui.screen.intro-screen
// requires game.feature.gui.screen.title-logo
// requires impact.base.image
// requires game.feature.gui.screen.title-preset
// requires game.feature.menu.gui.save.save-menu
// requires game.feature.version.version
// requires game.feature.control.control
// requires game.feature.menu.gui.new-game.new-game-dialogs

export {};

declare global {
  namespace sc {
    interface TitleScreenGui extends ig.GuiElementBase {
      versionGui: sc.TextGui;
    }
    interface TitleScreenGuiConstructor extends ImpactClass<TitleScreenGui> {
      new (): TitleScreenGui;
    }
    var TitleScreenGui: TitleScreenGuiConstructor;

    interface TitleScreenButtonGui extends ig.GuiElementBase {
      buttonGroup: sc.ButtonGroup;
      buttons: sc.ButtonGui[];
      changelogButton: sc.ButtonGui;
      gameCodeButton: sc.ButtonGui;

      followButton: sc.ButtonGui;

      show(this: this): void;
      hide(this: this, skipTransition: boolean): void;
    }
    interface TitleScreenButtonGuiConstructor extends ImpactClass<TitleScreenButtonGui> {
      new (): TitleScreenButtonGui;
    }
    var TitleScreenButtonGui: TitleScreenButtonGuiConstructor;
  }
}
