import './game.feature.model.base-model';

export {};

declare global {
  namespace sc {
    enum ELEMENT {
      NEUTRAL,
      HEAT,
      COLD,
      SHOCK,
      WAVE,
    }
  }
}
