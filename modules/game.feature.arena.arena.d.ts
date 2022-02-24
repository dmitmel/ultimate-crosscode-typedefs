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
				order: number;
				name: ig.LangLabel.Data;
				condition?: string;
				noRush?: boolean;
				progress: Arena.CupProgress;
			}

			namespace CupData {
				interface CupCore {
					name: ig.LangLabel.Data;
					info: ig.LangLabel.Data;
					difficulty: number;
					level: number;
					creator: ig.LangLabel.Data;
					music: string;
					rushMusic: string;
					noRush?: boolean;
					condition?: string;
					type: sc.ARENA_BASE_TYPE;
				}

				interface ArenaRound {

				}
			}

			interface CupData {
				core: CupData.CupCore
			}

			interface CupProgress {
				rush: RushProgress;
				rounds: RoundProgress[];
			}

			interface RoundProgress {
				medal: number;
				points: number;
				time: number;
				cleared: number;
			}
			
			interface RushProgress extends RoundProgress {
				chain: number;
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

			interface KnownScoreTypes {
				DAMAGE_DONE: true;
				DAMAGE_DONE_EFFECTIVE: true;
				DAMAGE_TAKEN: true;
				KILL: true;
				BOSS_KILL: true;
				TARGET_KILL: true;
				MULTI_KILL: true;
				ENVIRONMENT_KILL: true;
				ONE_HIT_KILL: true;
				LOCK_FINISH: true;
				LOCK_FINISH_3: true;
				ELEMENT_OVERLOAD: true;
				PERFECT_SHIELD: true;
				PERFECT_DODGE: true;
				ENEMY_BREAK: true;
				GUARD_COUNTER: true;
				STATUS_INFLICT: true;
				PVP_ROUND_WON: true;
				PVP_ROUND_LOST: true;
				ENEMY_HEAL: true;
			}

			interface KnownCupAttributes {
				noRush: boolean;
				name: ig.LangLabel.Data;
				condition: string;
				type: ARENA_BASE_TYPE;
			}
		}

		interface Arena extends ig.GameAddon, ig.Vars.VarAccessor {
			active: boolean
			cups: Record<string, Arena.Cup>

			init(this: this): void
			registerCup(this: this, cupName: string, cupOptions: Arena.CupOptions, isExtension?: boolean): void
			onPreDamageApply(this: this, a: any, b: any, c: any, d: any, e: any): void
			addScore<K extends keyof Arena.KnownScoreTypes>(this: this, scoreType: K, points: number): void
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
			initMetaData(this: this, cupName: string): void;
			onLevelLoadStart(this: this): void;
			getCupRounds(this: this, cupName: string): sc.Arena.CupData.ArenaRound[];
			getCupCoreAttrib(this: this, cupName: string, attribute: string): any;
			getCupCoreAttrib<K extends keyof Arena.KnownCupAttributes>(this: this, cupName: string, attribute: K): Arena.KnownCupAttributes[K];
		}

		interface ArenaConstructor extends ImpactClass<Arena> { }

		var Arena: ArenaConstructor
		var arena: Arena

		var ARENA_BONUS_OBJECTIVE: { [key: string]: Arena.ArenaBonusObjective }
		var ARENA_SCORE_TYPES: Record<keyof Arena.KnownScoreTypes, Arena.ArenaScoreType>
	}

	namespace ig.Vars {
		interface KnownVarStrings {
			"arena.active": boolean
		}
	}
}