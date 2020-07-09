import './impact.base.event';
import './impact.base.game';
import './impact.base.sound';
import './impact.feature.storage.storage';

export {};

declare global {
  namespace ig {
    namespace BGM_SWITCH_MODE {
      interface Mode {
        fadeIn: number;
        fadeOut: number;
      }

      var IMMEDIATELY: Mode;
      var FAST_OUT: Mode;
      var MEDIUM_OUT: Mode;
      var SLOW_OUT: Mode;
      var VERY_SLOW_OUT: Mode;
      var FAST: Mode;
      var MEDIUM: Mode;
      var SLOW: Mode;
      var VERY_SLOW: Mode;
    }
    type BGM_SWITCH_MODE = keyof typeof BGM_SWITCH_MODE;

    interface Bgm extends ig.GameAddon {
      clear(this: this, mode?: ig.BGM_SWITCH_MODE): void;
    }
    interface BgmConstructor extends ImpactClass<Bgm> {}
    var Bgm: BgmConstructor;
    var bgm: Bgm;
  }
}
