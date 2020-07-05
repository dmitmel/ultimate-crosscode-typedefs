import './impact.feature.rumble.rumble';
import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.gui.base.box';
import './game.feature.gui.hud.right-hud';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.arena.arena-misc';
import './game.feature.arena.gui.arena-effect-display';

export {};

declare global {
  namespace sc {
    interface ArenaRoundEndButtons extends ig.GuiElementBase {
      buttons: sc.ButtonGui[];
    }
    interface ArenaRoundEndButtonsConstructor extends ImpactClass<ArenaRoundEndButtons> {
      new (
        callback: (rushMode: boolean, buttonIndex: number, isLastRound: boolean) => void,
        info: sc.InfoBar,
        playerDeath: boolean,
      ): ArenaRoundEndButtons;
    }
    var ArenaRoundEndButtons: ArenaRoundEndButtonsConstructor;
  }
}
