// requires impact.base.game
// requires game.feature.model.game-model

export {};

declare global {
  namespace sc {
    var MIN_BOOSTER_LEVEL: number;

    interface EnemyBooster extends ig.GameAddon, sc.Model.Observer {
      boosted: boolean;

      updateBoosterState(this: this): void;
      updateEnemyBoostState(this: this, enemy: ig.ENTITY.Enemy): void;
    }
    interface EnemyBoosterConstructor extends ImpactClass<EnemyBooster> {
      new (): EnemyBooster;
    }
    var EnemyBooster: EnemyBoosterConstructor;
    var enemyBooster: EnemyBooster;
  }
}
