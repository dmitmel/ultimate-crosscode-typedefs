// requires impact.base.loader
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.model.combat-condition
// requires impact.base.animation

export {};

declare global {
  namespace sc {
    namespace EnemyType {
      interface ItemDrop {
        item: sc.ItemID;
        prob: number;
        min: number;
        max: number;
        rank: sc.CombatRankLabel | '';
        boosted?: boolean | null;
        condition?: string | null;
      }
    }
    interface EnemyType extends ig.JsonLoadable {
      level: number;
      boss: boolean;
      itemDrops: sc.EnemyType.ItemDrop[];
      bossLabel: ig.LangLabel.Data | string;
      boostedLevel: number;
      actions: Record<string, ig.Action>;
      reactions: Record<string, EnemyReactionBase>;

      resolveItemDrops(this: this, enemyEntity: ig.ENTITY.Enemy): void;
    }
    interface EnemyTypeConstructor extends ImpactClass<EnemyType> {
      new (name: string): EnemyType;
    }
    var EnemyType: EnemyTypeConstructor;
  }
}
