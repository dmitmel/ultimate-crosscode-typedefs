// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires game.feature.arena.entities.arena-spawn
// requires game.feature.arena.arena-loadable
// requires game.feature.combat.combat
// requires game.feature.arena.arena-bonus-objectives
// requires game.feature.arena.arena-score-types
// requires game.feature.arena.arena-challenges
// requires game.feature.arena.arena-cheer
export { };

declare global {
	namespace sc {
		enum ARENA_MEDAL_TROPHIES {
			BRONZE = 1,
			SILVER = 2,
			GOLD = 3,
			PLATIN = 4,
			TRUE_PLATIN = 5,
		}
    enum ARENA_BASE_TYPE {
			SOLO_CUP = "SOLO_CUP",
			TEAM_CUP = "TEAM_CUP",
			SOLO_CUSTOM = "SOLO_CUSTOM",
			TEAM_CUSTOM = "TEAM_CUSTOM",
		}
		enum ARENA_ROUND_MODE {
			DEFAULT = "DEFAULT",
		}
		enum ARENA_SORT_TYPES {
			ORDER = 0
		}
		enum ARENA_PAUSE_ACTIONS {
			NONE = 0,
			RESTART = 1,
			LOBBY = 2
		}
		var ARENA_CHAIN_MAX_TIME: number;
		var ARENA_SILVER_MEDAL_QUOTA: number;
		var ARENA_RUSH_COIN_QUOTA: number;
		var ARENA_TROPHY_QUOTA: number;
		var ARENA_MAX_CHAIN_HITS: number;
		var ARENA_MAX_CHAIN_MULTIPLIER: number;

		namespace Arena {
			interface CupOptions {
				order?: number,
				id?: string
			}

			interface Cup {
				order: number
				name: ig.LangLabel.Data
			}

			interface ArenaBonusObjective {
				_type: "Integer" | "EMPTY",
				_prefix?: "seconds" | "value" | "target"
				order: number,
				displayRangePoints: boolean,

				init(a: any, b: any): void
				check(a: any): boolean
				getText(a: string, b: any, c: boolean): string
				getPoints?(a: any, b: any): number
			}

			interface ArenaScoreType {
				order: number,
				staticMultiplier?: number
				static?: boolean
				asBonus?: boolean
			}
		}

		interface Arena extends ig.GameAddon {
			active: boolean
			cups: Record<string, Arena.Cup>

			init(this: this): void
			registerCup(this: this, cupName: string, cupOptions: Arena.CupOptions, isExtension?: boolean): void
			onPreDamageApply(this: this, a: any, b: any, c: any, d: any, e: any): void
			addScore<K extends keyof typeof sc.ArenaScoreTypes.KnownScoreTypes>(this: this, scoreType: K, points: number): void
			addScore(this: this, scoreType: string, points: number): void
			getTotalArenaCompletion(this: this): number
			getCupCompletion(this: this, cupName: string): number
			getTotalDefaultTrophies(this: this, a: number, c: boolean): number
			getCupTrophy(this: this, cupName: string): number
			isCupUnlocked(this: this, cupName: string): boolean
			getTotalDefaultCups(this: this, sorted: boolean): { [key: string]: { order: number } }
			isCupCustom(this: this, cupName: string): boolean
			isEnemyBlocked(this: this, entity: ig.ENTITY.Enemy): boolean
			onCombatantHeal(this: this, entity: ig.ENTITY.Combatant, healAmount: number): void
			startRound(this: this): void
			endRound(this: this): void
			initMetaData(this: this, key: string): void
		}

		interface ArenaConstructor extends ImpactClass<Arena> { }

		var Arena: ArenaConstructor
		var arena: Arena

		namespace ArenaScoreTypes {
			enum KnownScoreTypes {
				DAMAGE_DONE = "DAMAGE_DONE",
				DAMAGE_DONE_EFFECTIVE = "DAMAGE_DONE_EFFECTIVE",
				DAMAGE_TAKEN = "DAMAGE_TAKEN",
				KILL = "KILL",
				BOSS_KILL = "BOSS_KILL",
				TARGET_KILL = "TARGET_KILL",
				MULTI_KILL = "MULTI_KILL",
				ENVIRONMENT_KILL = "ENVIRONMENT_KILL",
				ONE_HIT_KILL = "ONE_HIT_KILL",
				LOCK_FINISH = "LOCK_FINISH",
				LOCK_FINISH_3 = "LOCK_FINISH_3",
				ELEMENT_OVERLOAD = "ELEMENT_OVERLOAD",
				PERFECT_SHIELD = "PERFECT_SHIELD",
				PERFECT_DODGE = "PERFECT_DODGE",
				ENEMY_BREAK = "ENEMY_BREAK",
				GUARD_COUNTER = "GUARD_COUNTER",
				STATUS_INFLICT = "STATUS_INFLICT",
				PVP_ROUND_WON = "PVP_ROUND_WON",
				PVP_ROUND_LOST = "PVP_ROUND_LOST",
				ENEMY_HEAL = "ENEMY_HEAL",
			}
		}

		var ARENA_BONUS_OBJECTIVE: { [key: string]: Arena.ArenaBonusObjective }
		var ARENA_SCORE_TYPES: { [key: string]: Arena.ArenaScoreType }
	}
}