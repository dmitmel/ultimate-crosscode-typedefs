import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './game.feature.menu.gui.menu-misc';

export {};

declare global {
  namespace sc {
    interface KeyBinderGui extends ig.ColorGui {
      box: sc.BlackWhiteBox;
      button: sc.ButtonGui;
      back: sc.ButtonGui;

      show(
        this: this,
        finishCallback: (keyCode: number | null, isAlternative: boolean, unbind: boolean) => void,
        forAction: string,
        isAlternative: boolean,
      ): void;
    }
    interface KeyBinderGuiConstructor extends ImpactClass<KeyBinderGui> {
      new (): KeyBinderGui;
    }
    var KeyBinderGui: KeyBinderGuiConstructor;
  }
}
