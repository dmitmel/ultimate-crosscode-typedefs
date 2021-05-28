// requires impact.base.loader
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.model.combat-condition
// requires impact.base.animation

export {};

declare global {
  namespace sc {
    interface EnemyType extends ig.JsonLoadable {
      bossLabel: ig.LangLabel.Data | string;
    }
    interface EnemyTypeConstructor extends ImpactClass<EnemyType> {
      new (name: string): EnemyType;
    }
    var EnemyType: EnemyTypeConstructor;
  }
}
