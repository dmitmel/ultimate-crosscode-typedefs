// requires game.feature.character.abstract-face.d.ts

declare namespace sc {
  interface CharacterExpression extends ig.Cacheable {}
  interface CharacterExpressionConstructor extends ImpactClass<CharacterExpression> {}
  var CharacterExpression: CharacterExpressionConstructor;
}
