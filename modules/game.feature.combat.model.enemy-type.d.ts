import './impact.base.loader';
import './game.feature.combat.model.combat-params';
import './game.feature.combat.model.combat-condition';
import './impact.base.animation';

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
