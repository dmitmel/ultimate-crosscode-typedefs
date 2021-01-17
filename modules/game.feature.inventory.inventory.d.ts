import './impact.base.loader';
import './game.config';
import './game.feature.inventory.item-level-scaling';

export {};

declare global {
  namespace sc {
    enum ITEMS_TYPES {
      CONS = 'CONS',
      EQUIP = 'EQUIP',
      TRADE = 'TRADE',
      KEY = 'KEY',
      TOGGLE = 'TOGGLE',
    }

    enum ITEMS_EQUIP_TYPES {
      HEAD = 'HEAD',
      ARM = 'ARM',
      TORSO = 'TORSO',
      FEET = 'FEET',
    }

    enum ITEMS_RARITY {
      LOW = 0,
      NORMAL = 1,
      RARE = 2,
      LEGENDARY = 3,
      UNIQUE = 4,
      BACKER = 5,
      SCALE = 6,
    }

    enum SORT_TYPE {
      ORDER = 0,
      NAME = 1,
      AMOUNT = 2,
      RARITY = 3,
      HP = 4,
      ATTACK = 5,
      DEFENSE = 6,
      FOCUS = 7,
      LEVEL = 8,
    }

    namespace Inventory {
      type ItemID = string | number;

      interface Item {
        name: ig.LangLabel.Data;
        description: ig.LangLabel.Data;
        type: sc.ITEMS_TYPES;
        icon: string; // TODO
        order: number;
        level: number;
        effect: { sheet: string; name?: string | null }; // TODO
        rarity: sc.ITEMS_RARITY;
        cost: number;
        noTrack: boolean;
        sources: sc.Inventory.ItemSource[];
        equipType?: sc.ITEMS_EQUIP_TYPES | null;
        isScalable?: boolean | null;
        // TODO
      }

      type ItemSource =
        | { type: 'ENEMY'; value: string }
        | { type: 'TRADER'; value: string }
        | { type: 'PLANT'; value: string }
        | { type: 'QUEST'; value: string }
        | { type: 'CHEST'; value: string }
        | {
            type: 'OTHER';
            value: {
              text: ig.LangLabel.Data;
              icon: ItemSource['type'];
              subText?: ig.LangLabel.Data | null;
              arrow: boolean;
            };
          };
    }
    interface Inventory extends ig.SingleLoadable {
      getItem(id: sc.Inventory.ItemID): sc.Inventory.Item;
    }
    interface InventoryConstructor extends ImpactClass<Inventory> {}
    var Inventory: InventoryConstructor;
    var inventory: Inventory;
  }
}
