import './impact.base.loader';
import './game.config';
import './game.feature.inventory.item-level-scaling';

export {};

declare global {
  namespace sc {
    namespace Inventory {
      interface Item {
        // TODO
      }

      namespace Item {
        type Source =
          | { type: 'ENEMY'; value: string }
          | { type: 'TRADER'; value: string }
          | { type: 'PLANT'; value: string }
          | { type: 'QUEST'; value: string }
          | { type: 'CHEST'; value: string }
          | {
              type: 'OTHER';
              value: {
                text: ig.LangLabel.Data;
                icon: Source['type'];
                subText?: ig.LangLabel.Data | null;
                arrow: boolean;
              };
            };
      }
    }
  }
}
