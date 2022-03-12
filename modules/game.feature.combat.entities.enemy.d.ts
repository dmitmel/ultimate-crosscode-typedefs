// requires game.feature.combat.entities.combatant
// requires game.feature.combat.model.enemy-type
// requires game.feature.combat.model.enemy-annotation
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace sc {
    enum ENEMY_BOOSTER_STATE {
      NONE = 0,
      BOOSTABLE = 1,
      BOOSTED = 2,
    }
  }

  namespace ig.ENTITY {
    interface Enemy extends ig.ENTITY.Combatant {
      enemyType: sc.EnemyType;
      currentState: string;
      boosterState: sc.ENEMY_BOOSTER_STATE;

      setLevelOverride(this: this, newLevel?: number | null): void;
      changeState(this: this, state: string, immediate?: boolean | null): void;
    }
    interface EnemyConstructor extends ImpactClass<Enemy> {
      new (x: number, y: number, z: number, settings: ig.Entity.Settings): ig.ENTITY.Enemy
    }
    var Enemy: EnemyConstructor;
  }
}
