// requires impact.base.game
// requires impact.feature.effect.effect-sheet
// requires impact.feature.database.database
// requires impact.feature.navigation.navigation
// requires game.feature.model.game-model

export {};

declare global {
    namespace sc {
        enum COMBATANT_PARTY {
            PLAYER,
            ENEMY,
            OTHER
        }
        
        interface Combat extends ig.GameAddon {
            enemyDataList: Record<string, sc.EnemyType>;
            effects: Record<string, ig.EffectSheet>;
    
            canShowBoostedEntry(this: this, enemyName: string, isBoss: boolean): boolean
            showPerfectDashEffect(this: this, target: ig.ActorEntity): void
            getElementMode(this: this, combatant: ig.ENTITY.Combatant): sc.ELEMENT;
        }
        interface CombatConstructor extends ImpactClass<Combat> { }
        var Combat: CombatConstructor;
        var combat: Combat;
    }
}