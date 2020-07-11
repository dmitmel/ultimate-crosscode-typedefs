import './impact.base.game';
import './impact.feature.interact.button-interact';
import './impact.feature.storage.storage';
import './game.feature.model.base-model';
import './game.feature.menu.area-loadable';
import './game.feature.menu.gui.start-menu';
import './game.feature.menu.gui.equip.equip-menu';
import './game.feature.menu.gui.circuit.circuit-menu';
import './game.feature.menu.gui.item.item-menu';
import './game.feature.menu.gui.map.map-menu';
import './game.feature.menu.gui.save.save-menu';
import './game.feature.menu.gui.options.options-menu';
import './game.feature.menu.gui.shop.shop-menu';
import './game.feature.menu.gui.synop.synop-menu';
import './game.feature.menu.gui.quests.quest-menu';
import './game.feature.menu.gui.quest-hub.quest-hub-menu';
import './game.feature.menu.gui.enemies.enemy-menu';
import './game.feature.menu.gui.lore.lore-menu';
import './game.feature.menu.gui.status.status-menu';
import './game.feature.menu.gui.help.help-menu';
import './game.feature.menu.gui.museum.museum-menu';
import './game.feature.menu.gui.stats.stats-menu';
import './game.feature.menu.gui.trophy.trophy-menu';
import './game.feature.menu.gui.social.social-menu';
import './game.feature.menu.gui.trade.trader-menu';
import './game.feature.menu.gui.botanics.botanics-menu';
import './game.feature.menu.gui.arena.arena-menu';
import './game.feature.menu.gui.new-game.new-game-menu';
import './game.feature.menu.map-model';

export {};

declare global {
  namespace sc {
    enum MENU_QUEST_HUB_TABS {
      OPEN,
      ACTIVE,
      FINISHED,
    }

    enum TOGGLE_SET_TYPE {
      SINGLE,
      MULTI,
    }

    interface MenuModel extends ig.GameAddon, sc.Model {
      statusElement: sc.ELEMENT;
      statusDiff: boolean;
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
