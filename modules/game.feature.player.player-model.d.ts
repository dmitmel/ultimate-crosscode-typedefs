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
    enum PLAYER_MSG {
      ELEMENT_MODE_CHANGE = 1,
      CREDIT_CHANGE = 2,
      EXP_CHANGE = 3,
      LEVEL_CHANGE = 4,
      EQUIP_CHANGE = 5,
      CP_CHANGE = 6,
      SKILL_CHANGED = 7,
      SKILL_BRANCH_SWAP = 8,
      RESET_PLAYER = 9,
      ITEM_OBTAINED = 10,
      SET_PARAMS = 11,
      CONFIG_CHANGED = 12,
      ITEM_USED = 13,
      STATS_CHANGED = 14,
      ITEM_REMOVED = 15,
      ITEM_BLOCK_FINISH = 16,
      ITEM_FAVORITES_CHANGED = 17,
      ITEM_EQUIP_UPDATE = 18,
      ITEM_CONSUME_START = 19,
      ITEM_CONSUME_END = 20,
      CORE_CHANGED = 21,
      ITEM_TOGGLED = 22,
    }

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
      MODIFIER = 28,
    }

    interface PlayerModel extends ig.Class, ig.Vars.Accessor {
      items: number[];
      params: sc.CombatParams;
      credit: number;
      level: number;
      skillPointsExtra: Record<sc.ELEMENT, number>;
      currentElementMode: sc.ELEMENT;

      getToggleItemState(this: this, id: sc.ItemID): boolean;
      getParamAvgLevel(this: this, level: number): number;
      useItem(this: this, id: number): void;
      setElementMode(
        this: this,
        element: sc.ELEMENT,
        force?: boolean | null,
        skipEffect?: boolean | null,
      ): boolean;
      getCore(this: this, core: sc.PLAYER_CORE): boolean;
      getItemAmount(this: this, item: sc.ItemID): number;
      hasItem(this: this, item: sc.ItemID): boolean;
      getItemAmountWithEquip(this: this, item: sc.ItemID): number;
      addItem(this: this, item: sc.ItemID, amount: number, hideEffect?: boolean): void;
      removeItem(
        this: this,
        item: sc.ItemID,
        amount: number,
        skipNotification?: boolean | null,
        includeEquip?: boolean | null,
      ): boolean;
      getAction(this: this, action: sc.PLAYER_ACTION): sc.PlayerAction;
      addCredit(this: this, amount: number): void;
      removeCredit(this: this, amount: number): void;
    }
    interface PlayerModelContructor extends ImpactClass<PlayerModel> {
      new (): PlayerModel;
    }
    var PlayerModel: PlayerModelContructor;
  }
}
