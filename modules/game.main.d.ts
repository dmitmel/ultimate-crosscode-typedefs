// requires impact.base.game.d.ts
// requires game.config.d.ts
// requires game.features.d.ts
// requires game.beta.d.ts

declare namespace sc {
  interface CrossCode extends ig.Game {
    onGameLoopStart(this: this): void;
  }
  interface CrossCodeConstructor extends ImpactClass<CrossCode> {}
  var CrossCode: CrossCodeConstructor;
}
