// requires impact.feature.gui.gui.d.ts
// requires game.feature.gui.base.button.d.ts
// requires impact.feature.parallax.parallax.d.ts
// requires game.feature.gui.screen.intro-screen.d.ts
// requires game.feature.gui.screen.title-logo.d.ts
// requires impact.base.image.d.ts
// requires game.feature.gui.screen.title-preset.d.ts
// requires game.feature.menu.gui.save.save-menu.d.ts
// requires game.feature.version.version.d.ts
// requires game.feature.control.control.d.ts
// requires game.feature.menu.gui.new-game.new-game-dialogs.d.ts

declare namespace sc {
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
  interface TitleScreenButtonGuiConstructor
    extends ImpactClass<TitleScreenButtonGui> {
    new (): TitleScreenButtonGui;
  }
  var TitleScreenButtonGui: TitleScreenButtonGuiConstructor;
}
