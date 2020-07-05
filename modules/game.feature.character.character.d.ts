import './game.feature.character.abstract-face';

export {};

declare global {
  namespace sc {
    interface CharacterExpression extends ig.Cacheable {}
    interface CharacterExpressionConstructor extends ImpactClass<CharacterExpression> {}
    var CharacterExpression: CharacterExpressionConstructor;
  }
}
