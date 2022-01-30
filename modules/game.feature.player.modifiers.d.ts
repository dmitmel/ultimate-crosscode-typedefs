// requires impact.base.game

export {};

declare global {
	namespace sc {
		namespace Modifiers {
			interface Modifier {
				icon: number
				order?: number
				noPercent?: boolean
				altSheet?: string
				offX?: number
				offY?: number
			}

			enum KnownModifiers {
				AIM_SPEED,
				AIM_STABILITY,
				AIMING_MOVEMENT,
				KNOCKBACK,
				RANGED_DMG,
				MELEE_DMG,
				CRITICAL_DMG,
				BREAK_DMG,
				SPIKE_DMG,
				ASSAULT,
				CROSS_COUNTER,
				BERSERK,
				MOMENTUM,
				DASH_INVINC,
				DASH_STEP,
				GUARD_STRENGTH,
				GUARD_SP,
				GUARD_AREA,
				PERFECT_GUARD_WINDOW,
				PERFECT_GUARD_RESET,
				STUN_THRESHOLD,
				OVERHEAT_REDUCTION,
				HP_REGEN,
				SP_REGEN,
				ITEM_GUARD,
				ONCE_MORE,
				XP_PLUS,
				DROP_CHANCE,
				MONEY_PLUS,
				XP_ZERO,
				RANK_PLANTS,
				ITEM_BOOST,
				APPETITE,
				COND_HEALING,
				COND_EFFECT_HEAT,
				COND_EFFECT_COLD,
				COND_EFFECT_SHOCK,
				COND_EFFECT_WAVE,
				COND_EFFECT_ALL,
				COND_GUARD_HEAT,
				COND_GUARD_COLD,
				COND_GUARD_SHOCK,
				COND_GUARD_WAVE,
				SPIDER_SLOW_DOWN_GUARD,
				BEGONE_ICE,
			}
		}

		var MODIFIERS: Record<string, sc.Modifiers.Modifier>
	}
}