import './impact.base.font';
import './impact.base.game';
import './game.feature.combat.stat-change';

export {};

declare global {
  namespace sc {
    enum FONT_COLORS {
      RED,
      GREEN,
      PURPLE,
      GREY,
      ORANGE,
    }

    interface FontSystem extends ig.GameAddon {
      font: ig.MultiFont;
      smallFont: ig.MultiFont;
      tinyFont: ig.MultiFont;

      // see `impact.base.input` for why this rule is disabled
      /* eslint-disable @typescript-eslint/unified-signatures */
      changeKeyCodeIcon(this: this, action: ig.Input.KnownAction, key: ig.KEY): void;
      changeKeyCodeIcon(this: this, action: string, key: ig.KEY): void;
      /* eslint-enable @typescript-eslint/unified-signatures */
    }
    interface FontSystemConstructor extends ImpactClass<FontSystem> {
      new (): FontSystem;
    }
    var FontSystem: FontSystemConstructor;
    var fontsystem: sc.FontSystem;
  }
}
