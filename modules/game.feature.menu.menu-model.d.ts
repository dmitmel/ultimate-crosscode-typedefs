// requires impact.base.game
// requires impact.feature.interact.button-interact
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires game.feature.menu.area-loadable
// requires game.feature.menu.gui.start-menu
// requires game.feature.menu.gui.equip.equip-menu
// requires game.feature.menu.gui.circuit.circuit-menu
// requires game.feature.menu.gui.item.item-menu
// requires game.feature.menu.gui.map.map-menu
// requires game.feature.menu.gui.save.save-menu
// requires game.feature.menu.gui.options.options-menu
// requires game.feature.menu.gui.shop.shop-menu
// requires game.feature.menu.gui.synop.synop-menu
// requires game.feature.menu.gui.quests.quest-menu
// requires game.feature.menu.gui.quest-hub.quest-hub-menu
// requires game.feature.menu.gui.enemies.enemy-menu
// requires game.feature.menu.gui.lore.lore-menu
// requires game.feature.menu.gui.status.status-menu
// requires game.feature.menu.gui.help.help-menu
// requires game.feature.menu.gui.museum.museum-menu
// requires game.feature.menu.gui.stats.stats-menu
// requires game.feature.menu.gui.trophy.trophy-menu
// requires game.feature.menu.gui.social.social-menu
// requires game.feature.menu.gui.trade.trader-menu
// requires game.feature.menu.gui.botanics.botanics-menu
// requires game.feature.menu.gui.arena.arena-menu
// requires game.feature.menu.gui.new-game.new-game-menu
// requires game.feature.menu.map-model

export {};

declare global {
  namespace sc {
    enum MENU_SUBMENU {
      START = 0,
      ITEMS = 1,
      SKILLS = 2,
      EQUIPMENT = 3,
      STATUS = 4,
      SYNOPSIS = 5,
      MAP = 6,
      SAVE = 7,
      OPTIONS = 8,
      SHOP = 9,
      QUESTS = 10,
      TROPHY = 11,
      LORE = 12,
      ENEMY = 13,
      SOCIAL = 14,
      STATS = 15,
      MUSEUM = 16,
      TRADE = 17,
      BOTANICS = 18,
      QUEST_HUB = 19,
      ARENA = 20,
      NEW_GAME = 21,
    }

    enum MENU_LEA_STATE {
      LARGE = 0,
      SMALL = 1,
      HIDDEN = 2,
    }

    enum MENU_EQUIP_BODYPART {
      NONE = 0,
      HEAD = 1,
      RIGHT_ARM = 2,
      LEFT_ARM = 3,
      TORSO = 4,
      FEET = 5,
    }

    enum MENU_EQUIP_BODYPART_STR {
      HEAD = 'head',
      LEFT_ARM = 'leftArm',
      RIGHT_ARM = 'rightArm',
      TORSO = 'torso',
      FEET = 'feet',
    }

    enum MENU_SHOP_TYPES {
      BUY_AND_SELL = 0,
      BUY = 1,
      SELL = 2,
      COIN = 3,
    }

    enum MENU_SHOP_STATE {
      START = 0,
      BUY = 1,
      SELL_CAT = 2,
      SELL = 3,
    }

    enum LOG_TYPES {
      QUEST = 0,
      LANDMARK = 1,
      LORE = 2,
      TROPHY = 3,
      TRADER = 4,
      STORY = 5,
      DROP = 6,
    }

    enum MENU_STATUS_PAGES {
      MAIN = 0,
      PARAMS = 1,
      MODS = 2,
      COMBAT_ARTS = 3,
    }

    enum BOTANICS_SORT_TYPE {
      ORDER = 0,
      FOUND = 1,
      NAME = 2,
    }

    var MENU_STATUS_PAGES_LENGTH: number;

    var SELL_PAGES: Array<{
      lang: string;
      type: sc.ITEMS_TYPES;
      equipType: sc.ITEMS_EQUIP_TYPES;
    }>;

    enum MENU_QUEST_HUB_TABS {
      OPEN = 0,
      ACTIVE = 1,
      FINISHED = 2,
    }

    enum MENU_ARENA_TABS {
      SOLO = 0,
      TEAM = 1,
    }

    var MAX_STAMPS_MAX: number;
    var MAX_MOD_VAL: number;

    enum TOGGLE_SET_TYPE {
      SINGLE = 'SINGLE',
      MULTI = 'MULTI',
    }

    interface MenuModel extends ig.GameAddon, sc.Model {
      statusElement: sc.ELEMENT;
      statusDiff: boolean;
      buttonInteract: ig.ButtonInteractEntry;

      moveLeaSprite(this: this, x: number, y: number, leaState: sc.MENU_LEA_STATE): void;
      popBackCallback(this: this): void;
      pushBackCallback(this: this, callback: () => void): void;
      popMenu(this: this): void;
    }
    interface MenuModelConstructor extends ImpactClass<MenuModel> {}
    var MenuModel: MenuModelConstructor;
    var menu: sc.MenuModel;

    namespace MenuHelper {
      function drawLevel(
        level: number,
        width: number,
        height: number,
        numberGfx: ig.Image,
        isScalable: boolean,
      ): void;
    }
  }
}
