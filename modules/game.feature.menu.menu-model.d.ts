// requires impact.base.game.d.ts
// requires impact.feature.interact.button-interact.d.ts
// requires impact.feature.storage.storage.d.ts
// requires game.feature.model.base-model.d.ts
// requires game.feature.menu.area-loadable.d.ts
// requires game.feature.menu.gui.start-menu.d.ts
// requires game.feature.menu.gui.equip.equip-menu.d.ts
// requires game.feature.menu.gui.circuit.circuit-menu.d.ts
// requires game.feature.menu.gui.item.item-menu.d.ts
// requires game.feature.menu.gui.map.map-menu.d.ts
// requires game.feature.menu.gui.save.save-menu.d.ts
// requires game.feature.menu.gui.options.options-menu.d.ts
// requires game.feature.menu.gui.shop.shop-menu.d.ts
// requires game.feature.menu.gui.synop.synop-menu.d.ts
// requires game.feature.menu.gui.quests.quest-menu.d.ts
// requires game.feature.menu.gui.quest-hub.quest-hub-menu.d.ts
// requires game.feature.menu.gui.enemies.enemy-menu.d.ts
// requires game.feature.menu.gui.lore.lore-menu.d.ts
// requires game.feature.menu.gui.status.status-menu.d.ts
// requires game.feature.menu.gui.help.help-menu.d.ts
// requires game.feature.menu.gui.museum.museum-menu.d.ts
// requires game.feature.menu.gui.stats.stats-menu.d.ts
// requires game.feature.menu.gui.trophy.trophy-menu.d.ts
// requires game.feature.menu.gui.social.social-menu.d.ts
// requires game.feature.menu.gui.trade.trader-menu.d.ts
// requires game.feature.menu.gui.botanics.botanics-menu.d.ts
// requires game.feature.menu.gui.arena.arena-menu.d.ts
// requires game.feature.menu.gui.new-game.new-game-menu.d.ts
// requires game.feature.menu.map-model.d.ts

declare namespace sc {
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
    function drawLevel(level: number, width: number, height: number, numberGfx: ig.Image): void;
  }
}
