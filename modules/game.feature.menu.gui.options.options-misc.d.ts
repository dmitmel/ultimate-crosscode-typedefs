// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts

declare namespace sc {
  interface KeyBinderGui extends ig.ColorGui {
    box: sc.BlackWhiteBox;
    button: sc.ButtonGui;
    back: sc.ButtonGui;

    show(
      this: this,
      finishCallback: (
        keyCode: number | null,
        isAlternative: boolean,
        unbind: boolean,
      ) => void,
      forAction: string,
      isAlternative: boolean,
    ): void;
  }
  interface KeyBinderGuiConstructor extends ImpactClass<KeyBinderGui> {
    new (): KeyBinderGui;
  }
  var KeyBinderGui: KeyBinderGuiConstructor;
}
