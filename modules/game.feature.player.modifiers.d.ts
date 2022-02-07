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

			interface KnownModifiers {
				AIM_SPEED: true;
				AIM_STABILITY: true;
				AIMING_MOVEMENT: true;
				KNOCKBACK: true;
				RANGED_DMG: true;
				MELEE_DMG: true;
				CRITICAL_DMG: true;
				BREAK_DMG: true;
				SPIKE_DMG: true;
				ASSAULT: true;
				CROSS_COUNTER: true;
				BERSERK: true;
				MOMENTUM: true;
				DASH_INVINC: true;
				DASH_STEP: true;
				GUARD_STRENGTH: true;
				GUARD_SP: true;
				GUARD_AREA: true;
				PERFECT_GUARD_WINDOW: true;
				PERFECT_GUARD_RESET: true;
				STUN_THRESHOLD: true;
				OVERHEAT_REDUCTION: true;
				HP_REGEN: true;
				SP_REGEN: true;
				ITEM_GUARD: true;
				ONCE_MORE: true;
				XP_PLUS: true;
				DROP_CHANCE: true;
				MONEY_PLUS: true;
				XP_ZERO: true;
				RANK_PLANTS: true;
				ITEM_BOOST: true;
				APPETITE: true;
				COND_HEALING: true;
				COND_EFFECT_HEAT: true;
				COND_EFFECT_COLD: true;
				COND_EFFECT_SHOCK: true;
				COND_EFFECT_WAVE: true;
				COND_EFFECT_ALL: true;
				COND_GUARD_HEAT: true;
				COND_GUARD_COLD: true;
				COND_GUARD_SHOCK: true;
				COND_GUARD_WAVE: true;
				SPIDER_SLOW_DOWN_GUARD: true;
				BEGONE_ICE: true;
			}
		}

		var MODIFIERS: Record<keyof sc.Modifiers.KnownModifiers, sc.Modifiers.Modifier>
	}
}