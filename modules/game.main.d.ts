import './impact.base.game';
import './game.config';
import './game.features';
import './game.beta';

export {};

declare global {
  namespace sc {
    interface CrossCode extends ig.Game {
      onGameLoopStart(this: this): void;
    }
    interface CrossCodeConstructor extends ImpactClass<CrossCode> {}
    var CrossCode: CrossCodeConstructor;
  }
}
