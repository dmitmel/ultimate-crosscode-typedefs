import './impact.feature.gui.gui';
import './game.feature.gui.base.button';
import './impact.feature.parallax.parallax';
import './game.feature.gui.screen.intro-screen';
import './game.feature.gui.screen.title-logo';
import './impact.base.image';
import './game.feature.gui.screen.title-preset';
import './game.feature.menu.gui.save.save-menu';
import './game.feature.version.version';
import './game.feature.control.control';
import './game.feature.menu.gui.new-game.new-game-dialogs';

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
