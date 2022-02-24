// requires game.feature.model.base-model
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball
// requires game.feature.player.player-config
// requires game.feature.achievements.stats-model
// requires game.feature.player.player-level
// requires game.feature.inventory.inventory

export {};

declare global {
    namespace sc {
        enum PLAYER_CORE {
            MOVE = 1,
            CHARGE = 2,
            DASH = 3,
            CLOSE_COMBAT = 4,
            GUARD = 5,
            CREDITS = 6,
            MENU = 7,
            ELEMENT_NEUTRAL = 8,
            ELEMENT_HEAT = 9,
            ELEMENT_COLD = 10,
            ELEMENT_SHOCK = 11,
            ELEMENT_WAVE = 12,
            QUICK_MENU = 13,
            THROWING = 14,
            ELEMENT_LOAD = 15,
            ELEMENT_CHANGE = 16,
            SPECIAL = 17,
            COMBAT_RANK = 18,
            QUEST_SWITCH = 19,
            EXP = 20,
            MENU_CIRCUIT = 21,
            MENU_SYNOPSIS = 22,
            MENU_SOCIAL = 23,
            MENU_SOCIAL_INVITE = 24,
            MENU_BOTANICS = 25,
            ITEMS = 26,
            MONEY = 27,
            MODIFIER = 28
        }

        interface PlayerModel extends ig.Class, ig.Vars.VarAccessor {
            skillPointsExtra: number[]
            level: number
            params: CombatParams
            items: number[]
            credit: number;
    
            getToggleItemState(this: this, id: sc.Inventory.ItemID): boolean
            getParamAvgLevel(this: this, level: number): number
            useItem(this: this, a: number): void
            setElementMode(this: this, element: sc.ELEMENT, forceChange: boolean, noEffect: boolean): boolean
            getCore(this: this, core: sc.PLAYER_CORE): boolean
            getItemAmount(this: this, item: Inventory.ItemID): number
            hasItem(this: this, item: Inventory.ItemID): boolean
            getItemAmountWithEquip(this: this, item: Inventory.ItemID): number
            addItem(this: this, item: Inventory.ItemID, amount: number, hideEffect?: boolean): void
            removeItem(this: this, item: Inventory.ItemID, amount: number, notifyObservers?: boolean, includeEquip?: boolean): boolean
            getAction(this: this, action: sc.PLAYER_ACTION): sc.PlayerAction;
            addCredit(this: this, amount: number): void;
            removeCredit(this: this, amount: number): void;
        }
        interface PlayerModelContructor extends ImpactClass<PlayerModel> {
            new (): PlayerModel
        }
        var PlayerModel: PlayerModelContructor
    }
}