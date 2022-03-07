// requires impact.base.game
// requires impact.feature.effect.effect-sheet
// requires impact.feature.database.database
// requires impact.feature.navigation.navigation
// requires game.feature.model.game-model

export {};

declare global {
  namespace sc {
    enum COMBATANT_PARTY {
      PLAYER = 1,
      ENEMY = 2,
      OTHER = 3,
    }

    namespace Combat {
      interface Effects {
        hit: ig.EffectSheet;
        guard: ig.EffectSheet;
        combat: ig.EffectSheet;
        combatant: ig.EffectSheet;
        throw: ig.EffectSheet;
        mode: ig.EffectSheet;
        heal: ig.EffectSheet;
        cooldownHandle: ig.EffectSheet; // never actually used and is set to null
      }
    }
    interface Combat extends ig.GameAddon {
      enemyDataList: Record<string, sc.EnemyType>;
      effects: sc.Combat.Effects;
      active: boolean;

      canShowBoostedEntry(this: this, enemyName: string, isBoss: boolean): boolean;
      showPerfectDashEffect(this: this, target: ig.ActorEntity): void;
      getElementMode(this: this, combatant: ig.ENTITY.Combatant): sc.ELEMENT;
      isInCombat(this: this, combatant: ig.ENTITY.Combatant): boolean;
    }
    interface CombatConstructor extends ImpactClass<Combat> {}
    var Combat: CombatConstructor;
    var combat: sc.Combat;
  }
}
