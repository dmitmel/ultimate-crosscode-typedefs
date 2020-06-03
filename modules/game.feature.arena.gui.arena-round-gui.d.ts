// requires impact.feature.rumble.rumble.d.ts
// requires impact.feature.gui.gui.d.ts
// requires impact.feature.gui.base.basic-gui.d.ts
// requires impact.feature.gui.base.box.d.ts
// requires game.feature.gui.hud.right-hud.d.ts
// requires game.feature.gui.base.text.d.ts
// requires game.feature.menu.gui.menu-misc.d.ts
// requires game.feature.menu.gui.arena.arena-misc.d.ts
// requires game.feature.arena.gui.arena-effect-display.d.ts

declare namespace sc {
  interface ArenaRoundEndButtons extends ig.GuiElementBase {
    buttons: sc.ButtonGui[];
  }
  interface ArenaRoundEndButtonsConstructor
    extends ImpactClass<ArenaRoundEndButtons> {
    new (
      callback: (
        rushMode: boolean,
        buttonIndex: number,
        isLastRound: boolean,
      ) => void,
      info: sc.InfoBar,
      playerDeath: boolean,
    ): ArenaRoundEndButtons;
  }
  var ArenaRoundEndButtons: ArenaRoundEndButtonsConstructor;
}
